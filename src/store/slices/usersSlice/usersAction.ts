import { createAsyncThunk } from '@reduxjs/toolkit'
import { usersAPI } from '../../../api/api'
import { QuerryParams } from '../../../models.ts/users'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (params: QuerryParams, thunkAPI) => {
    try {
      const response = await usersAPI.getUsers(params.count, params.page)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(
        'ошибка при получении списка пользователей'
      )
    }
  }
)

export const follow = createAsyncThunk(
  'users/follow',
  async (userId: number, thunkAPI) => {
    try {
      const response = await usersAPI.follow(userId)
      if (response.data.resultCode === 0) {
        return userId
      } else if (response.data.resultCode === 1) {
        throw {
          message: response.data.messages[0],
        }
      }
    } catch (e) {
      return thunkAPI.rejectWithValue('ошибка при подписке')
    }
  }
)

export const unfollow = createAsyncThunk(
  'users/unfollow',
  async (userId: number, thunkAPI) => {
    try {
      const response = await usersAPI.unfollow(userId)
      if (response.data.resultCode === 0) {
        return userId
      } else if (response.data.resultCode === 1) {
        throw {
          message: response.data.messages[0],
        }
      }
    } catch (e) {
      return thunkAPI.rejectWithValue('ошибка при отписке')
    }
  }
)
