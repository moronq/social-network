import { chatAPI } from '../../../api/chat-api'
import { ChateMessageType } from '../../../models/messages'
import { AppDispatch } from '../../store'
import { setMessages } from './messagesSlice'

// export const startMessagesListening = createAsyncThunk(
//   'messages/listening',
//   async (messages: Array<ChateMessageType>, thunkAPI) => {
//     chatAPI.subscribe((messages) => {})
//   }
// )

let _newMessageHandler: ((messages: Array<ChateMessageType>) => void) | null =
  null

const newMessageHandlerCreator = (dispatch: AppDispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages: Array<ChateMessageType>) => {
      dispatch(setMessages(messages))
    }
  }

  return _newMessageHandler
}

export const startMessagesListening = () => async (dispatch: AppDispatch) => {
  chatAPI.start()
  chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}

export const stoptMessagesListening = () => async (dispatch: AppDispatch) => {
  chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
  chatAPI.stop()
}

export const sendMessage =
  (message: string) => async (dispatch: AppDispatch) => {
    chatAPI.sendMessage(message)
  }
