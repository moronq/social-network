import { createAsyncThunk } from '@reduxjs/toolkit'
import { authAPI, securityAPI } from '../../../api/api'
import { userInfoLogin } from '../../../models/auth'

export const login = createAsyncThunk(
  'auth/login',
  async (userInfo: userInfoLogin, thunkAPI) => {
    try {
      const response = await authAPI.login(userInfo)
      console.log(response)
      if (response.data.resultCode === 0) {
        return response.data
      } else if (response.data.resultCode === 10) {
        const captcha = await securityAPI.getCaptchaURL()
        throw {
          type: 'captcha',
          captcha: captcha.data.url,
          message: response.data.messages[0],
        }
      } else {
        throw { type: 'error', message: response.data.messages[0] }
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)
