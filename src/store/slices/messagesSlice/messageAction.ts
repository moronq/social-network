import { chatAPI } from '../../../api/chat-api'
import { ChateMessageType } from '../../../models/messages'
import { AppDispatch } from '../../store'
import { deleteMessages, setMessages } from './messagesSlice'

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
  dispatch(deleteMessages())
}

export const sendMessage =
  (message: string) => async (dispatch: AppDispatch) => {
    chatAPI.sendMessage(message)
  }
