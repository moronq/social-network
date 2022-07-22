import React, { FC } from 'react'
import { ChateMessageType } from '../models/messages'
import avatar from './../assets/img/no-avatar-small.png'

const Message: FC<{ message: ChateMessageType }> = ({ message }) => {
  const userPhoto = message.photo ?? avatar

  return (
    <li className="flex gap-5">
      <img src={userPhoto} alt="avatar" className="w-12 h-12 rounded-full " />
      <div>
        <p>{message.userName}</p>
        <span>{message.message}</span>
      </div>
    </li>
  )
}

export default Message
