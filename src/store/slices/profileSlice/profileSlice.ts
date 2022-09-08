import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  PhotosType,
  ProfileResponse,
  ProfileType,
  ProfileTypeResponse,
  ProfileTypeStatus,
} from '../../../models/profile'
import { getProfile, getStatus, setPhoto, setStatus } from './profileAction'

const initialState: ProfileType & ProfileTypeStatus = {
  status: '',
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
      if (action.payload.userId?.toString() == localStorage.getItem('userId')) {
        localStorage.setItem('userAvatarSmall', action.payload.photos.small)
      }
    },
    [getProfile.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    [getStatus.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.status = action.payload
    },
    [setStatus.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.status = action.payload
    },
    [setStatus.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    [setPhoto.fulfilled.type]: (
      state,
      action: PayloadAction<ProfileResponse<{ photos: PhotosType }>>
    ) => {
      state.photos = action.payload.data.photos
    },
  },
})

export default profileSlice.reducer
