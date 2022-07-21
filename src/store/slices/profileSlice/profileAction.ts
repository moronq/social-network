import { createAsyncThunk } from '@reduxjs/toolkit'
import { profileAPI } from '../../../api/api'
import { ProfileResponse } from '../../../models.ts/profile'

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async (userId: string, thunkAPI) => {
    try {
      const response = await profileAPI.getProfile(userId)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(
        'ОШИБКА ПРИ ПОЛУЧЕНИИ ДАННЫХ ПОЛЬЗОВАТЕЛЯ'
      )
    }
  }
)

export const getStatus = createAsyncThunk(
  'profile/getStatus',
  async (userId: string, thunkAPI) => {
    const response = await profileAPI.getStatus(userId)
    return response.data
  }
)

type setStatusPayloadType = {
  status: string
  userId: string
}

export const setStatus = createAsyncThunk(
  'profile/setStatus',
  async (setStatusPayload: setStatusPayloadType, thunkAPI) => {
    try {
      const response = await profileAPI.setStatus(setStatusPayload.status)
      if (response.data.resultCode === 0) {
        const responseStatus = await profileAPI.getStatus(
          setStatusPayload.userId
        )
        return responseStatus.data
      }
    } catch (e) {
      return thunkAPI.rejectWithValue('ошибка при изменении статуса')
    }
  }
)
