import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authAPI } from '../../../api/api'
import { userInfoLogin, userInfoLoginResponse } from '../../../models.ts/auth'

type initialStateType = {
  userId: number | null
  isAuth: boolean
  login: string
  isLoading: boolean
  error: string | null
}

const initialState: initialStateType = {
  isAuth: false,
  isLoading: false,
  login: '',
  userId: null,
  error: null,
}

export const login = createAsyncThunk(
  'auth/login',
  async (userInfo: userInfoLogin, thunkAPI) => {
    try {
      const response = await authAPI.login(userInfo)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('ошибка при входе')
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state) => {
      state.isLoading = true
      state.error = null
    },
    [login.fulfilled.type]: (
      state,
      action: PayloadAction<userInfoLoginResponse>
    ) => {
      state.isLoading = false
      console.log(action.payload)
      // localStorage.setItem('auth', 'true')
      // localStorage.setItem('user', action.payload.username)
      state.isAuth = true
      state.userId = action.payload.data.userId
    },
    [login.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default authSlice.reducer
