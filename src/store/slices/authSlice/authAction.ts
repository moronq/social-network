import { createAsyncThunk } from '@reduxjs/toolkit'
import { authAPI } from '../../../api/api'
import { userInfoLogin } from '../../../models.ts/auth'

export const login = createAsyncThunk(
  'auth/login',
  async (userInfo: userInfoLogin, thunkAPI) => {
    try {
      const response = await authAPI.login(userInfo)
      if (response.data.resultCode === 200) {
        return response.data
      } else {
        throw { message: response.data.messages[0] }
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)
