import React, { useEffect, useState } from 'react'
import Chat from '../../components/Chat'
import { ChateMessageType } from '../../models/messages'

const ws = new WebSocket(
  'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
)

const MessagePage = () => {
  const [messages, setMessages] = useState<Array<ChateMessageType>>([])
  useEffect(() => {
    ws.addEventListener('message', (e) => {
      const newMessage = JSON.parse(e.data)
      setMessages((prev) => [...prev, ...newMessage])
    })
  }, [])
  return (
    <main className="flex gap-10 h-[calc(100vh-3rem)] w-full">
      <ul>
        <li>список диалогов</li>
        <li>список диалогов</li>
        <li>список диалогов</li>
        <li>список диалогов</li>
      </ul>
      <Chat messages={messages} ws={ws} />
    </main>
  )
}

export default MessagePage
