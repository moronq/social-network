import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { dialogType } from '../../../models/dialogs'
import { fetchDialogs } from './dialogsAction'

type initialStateType = {
  dialogList: Array<dialogType>
  error: string | null
}

const initialState: initialStateType = {
  dialogList: [] as Array<dialogType>,
  error: null,
}

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDialogs.pending.type]: (state) => {
      state.error = null
    },
    [fetchDialogs.fulfilled.type]: (
      state,
      action: PayloadAction<Array<dialogType>>
    ) => {
      state.dialogList = action.payload
    },
    [fetchDialogs.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export default dialogsSlice.reducer
