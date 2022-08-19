import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import {
  startMessagesListening,
  stoptMessagesListening,
} from '../store/slices/messagesSlice/messageAction'
import AddMessageForm from './AddMessageForm'
import Message from './Message'

const Chat: FC = () => {
  const dispatch = useAppDispatch()
  const { messages } = useAppSelector((state) => state.messages)

  useEffect(() => {
    dispatch(startMessagesListening())
    return () => {
      dispatch(stoptMessagesListening())
    }
  }, [])

  return (
    <div className="h-full w-full flex flex-col ">
      <div className="flex grow border-2 overflow-y-auto p-2">
        <ul className="flex gap-5 flex-col">
          {messages.map((el, index) => {
            return <Message key={index} message={el} userId={el.userId} />
          })}
        </ul>
      </div>
      <AddMessageForm />
    </div>
  )
}

export default Chat
