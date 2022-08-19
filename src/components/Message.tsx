import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ChateMessageType } from '../models/messages'
import avatar from './../assets/img/no-avatar-small.png'

type PropsType = {
  message: ChateMessageType
  userId: number
}

const Message: FC<PropsType> = ({ message, userId }) => {
  const userPhoto = message.photo ?? avatar

  return (
    <li className="flex gap-5">
      <Link to={`/profile/${userId}`}>
        <img src={userPhoto} alt="avatar" className="w-12 h-12 rounded-full " />
      </Link>
      <div>
        <Link to={`/profile/${userId}`}>
          <p>{message.userName}</p>
        </Link>

        <span>{message.message}</span>
      </div>
    </li>
  )
}

export default Message
