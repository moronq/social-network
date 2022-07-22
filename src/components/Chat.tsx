import React, { FC, useEffect } from 'react'
import { ChateMessageType } from '../models/messages'
import AddMessageForm from './AddMessageForm'
import Message from './Message'

type ChatType = {
  messages: Array<ChateMessageType>
  ws: WebSocket
}

const Chat: FC<ChatType> = ({ messages, ws }) => {
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
