import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  UsersInitialType,
  UsersTypeResponse,
  UserType,
} from '../../../models/users'
import { updateObjectInArray } from '../../../utils/utils'
import { fetchUsers, follow, searchUsers, unfollow } from './usersAction'

const initialState: UsersInitialType = {
  error: null,
  items: [],
  totalCount: 0,
  isLoadingUsers: false,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.error = null
      state.isLoadingUsers = true
    },
    [fetchUsers.fulfilled.type]: (
      state,
      action: PayloadAction<UsersTypeResponse>
    ) => {
      Object.assign(state, action.payload)
      state.isLoadingUsers = false
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoadingUsers = false
    },
    [follow.pending.type]: (state) => {
      state.error = null
    },
    [follow.fulfilled.type]: (state, action: PayloadAction<number>) => {
      updateObjectInArray(state.items, action.payload, 'id', { followed: true })
    },
    [follow.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    [unfollow.pending.type]: (state) => {
      state.error = null
    },
    [unfollow.fulfilled.type]: (state, action: PayloadAction<number>) => {
      updateObjectInArray(state.items, action.payload, 'id', {
        followed: false,
      })
    },
    [unfollow.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    [searchUsers.fulfilled.type]: (
      state,
      action: PayloadAction<UsersTypeResponse>
    ) => {
      state.items = action.payload.items
      state.totalCount = action.payload.totalCount
    },
  },
})

export default usersSlice.reducer
