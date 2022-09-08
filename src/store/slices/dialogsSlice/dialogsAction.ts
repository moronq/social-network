import { createAsyncThunk } from '@reduxjs/toolkit'
import { dialogAPI } from '../../../api/api'

export const startDialog = createAsyncThunk(
  'dialog/startDialog',
  async (userId: string, thunkAPI) => {
    try {
      const response = await dialogAPI.startDialog(userId)
      if (response.status === 200) {
        return response.data
      }
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка при создании диалога')
    }
  }
)

export const fetchDialogs = createAsyncThunk(
  'dialog/fetchDialogs',
  async (_, thunkAPI) => {
    try {
      const response = await dialogAPI.fetchDialogs()
      if (response.status === 200) {
        return response.data
      }
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка при загрузке диалога')
    }
  }
)
