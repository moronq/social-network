import React, { FC } from 'react'
import noAvatarSmall from './../assets/img/no-avatar-small.png'

type UserItemType = {
  photo: string | null
  name: string
  status: string | null
  followed: boolean
}

const UserItem: FC<UserItemType> = ({ photo, name, status, followed }) => {
  return (
    <li>
      <img src={photo || noAvatarSmall} alt="user-avatar" />
      <p>{name}</p>
      <p>{status || 'Не придумал статус'}</p>
      <button>{followed ? 'unfollow' : 'follow'}</button>
    </li>
  )
}

export default UserItem
