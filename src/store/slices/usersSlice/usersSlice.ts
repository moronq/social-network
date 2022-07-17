import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UsersInitialType, UsersTypeResponse } from '../../../models.ts/users'
import { updateObjectInArray } from '../../../utils/utils'
import { fetchUsers, follow, unfollow } from './usersAction'

const initialState: UsersInitialType = {
  error: null,
  items: [],
  totalCount: 0,
  isLoadingUsers: false,
  isFollowing: false,
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
      state.isFollowing = true
    },
    [follow.fulfilled.type]: (state, action: PayloadAction<number>) => {
      state.isFollowing = false
      updateObjectInArray(state.items, action.payload, 'id', { followed: true })
    },
    [follow.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFollowing = false
      state.error = action.payload
    },
    [unfollow.pending.type]: (state) => {
      state.error = null
      state.isFollowing = true
    },
    [unfollow.fulfilled.type]: (state, action: PayloadAction<number>) => {
      state.isFollowing = false
      updateObjectInArray(state.items, action.payload, 'id', {
        followed: false,
      })
    },
    [unfollow.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFollowing = false
      state.error = action.payload
    },
  },
})

export default usersSlice.reducer
