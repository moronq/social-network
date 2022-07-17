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
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('ошибка при подписке')
    }
  }
)
