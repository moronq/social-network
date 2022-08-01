import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ChateMessageType } from '../../../models/messages'

type StatusType = 'pending' | 'ready'

type initialStateType = {
  messages: Array<ChateMessageType>
  status: StatusType
}

const initialState: initialStateType = {
  messages: [],
  status: 'pending',
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages(state, action: PayloadAction<Array<ChateMessageType>>) {
      state.messages = state.messages.concat(action.payload)
    },
    changeStatus(state, action: PayloadAction<StatusType>) {
      state.status = action.payload
    },
  },
})

export const { setMessages } = messagesSlice.actions
export default messagesSlice.reducer
