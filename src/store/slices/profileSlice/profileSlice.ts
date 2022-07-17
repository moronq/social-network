import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProfileType, ProfileTypeResponse } from '../../../models.ts/profile'
import { getProfile } from './profileAction'

const initialState: ProfileType = {
  aboutMe: '',
  userId: null,
  fullName: '',
  lookingForAJob: false,
  lookingForAJobDescription: '',
  contacts: {
    facebook: null,
    github: null,
    instagram: null,
    mainLkink: null,
    twitter: null,
    vk: null,
    website: null,
    youtube: null,
  },
  photos: {
    large: '',
    small: '',
  },
  error: '',
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: {
    [getProfile.pending.type]: (state) => {
      state.error = ''
    },
    [getProfile.fulfilled.type]: (
      state,
      action: PayloadAction<ProfileTypeResponse>
    ) => {
      Object.assign(state, action.payload)
    },
    [getProfile.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export default profileSlice.reducer
