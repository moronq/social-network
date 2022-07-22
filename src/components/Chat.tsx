import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { setMessages } from '../store/slices/messagesSlice/messagesSlice'
import AddMessageForm from './AddMessageForm'
import Message from './Message'

const ws = new WebSocket(
  'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
)

const Chat: FC = () => {
  const dispatch = useAppDispatch()
  const { messages } = useAppSelector((state) => state.messages)
  useEffect(() => {
    ws.addEventListener('message', (e) => {
      const newMessage = JSON.parse(e.data)
      dispatch(setMessages(newMessage))
    })
  }, [messages])
  return (
    <div className="h-full w-full flex flex-col ">
      <div className="flex grow border-2 overflow-y-auto p-2">
        <ul className="flex gap-5 flex-col">
          {messages.map((el, index) => {
            return <Message key={index} message={el} />
          })}
        </ul>
      </div>
      <AddMessageForm ws={ws} />
    </div>
  )
}

export default Chat
