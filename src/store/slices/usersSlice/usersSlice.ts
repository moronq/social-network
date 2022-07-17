import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UsersTypeResponse } from '../../../models.ts/users'
import { fetchUsers } from './usersAction'

const initialState: UsersTypeResponse = {
  error: null,
  items: [],
  totalCount: 0,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.error = null
    },
    [fetchUsers.fulfilled.type]: (
      state,
      action: PayloadAction<UsersTypeResponse>
    ) => {
      Object.assign(state, action.payload)
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export default usersSlice.reducer
