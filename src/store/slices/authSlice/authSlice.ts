import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { userInfoLoginResponse } from '../../../models.ts/auth'
import { login } from './authAction'

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

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false
      state.userId = null
      state.login = ''
      state.error = null
      localStorage.removeItem('auth')
      localStorage.removeItem('userId')
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload
    },
    setLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload
    },
  },
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
      localStorage.setItem('auth', 'true')
      localStorage.setItem('userId', action.payload.data.userId.toString())
      state.isAuth = true
      state.userId = action.payload.data.userId
    },
    [login.rejected.type]: (
      state,
      action: PayloadAction<{ message: string }>
    ) => {
      state.isLoading = false
      state.error = action.payload.message
    },
  },
})

export default authSlice.reducer
export const { logout, setIsAuth, setLogin, setUserId } = authSlice.actions
