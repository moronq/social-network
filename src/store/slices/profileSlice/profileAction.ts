import { createAsyncThunk } from '@reduxjs/toolkit'
import { profileAPI } from '../../../api/api'

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
