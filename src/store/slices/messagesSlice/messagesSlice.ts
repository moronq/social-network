import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ChateMessageType } from '../../../models/messages'

type initialStateType = {
  messages: Array<ChateMessageType>
}

const initialState: initialStateType = {
  messages: [],
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages(state, action: PayloadAction<Array<ChateMessageType>>) {
      state.messages = state.messages.concat(action.payload)
    },
  },
})

export const { setMessages } = messagesSlice.actions
export default messagesSlice.reducer
