import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { usersAPI } from '../api/api'
import { useAppDispatch } from '../hooks/redux'
import { follow, unfollow } from '../store/slices/usersSlice/usersAction'
import noAvatarSmall from './../assets/img/no-avatar-small.png'

type UserItemType = {
  photo: string | null
  name: string
  status: string | null
  followed: boolean
  id: number
}

const UserItem: FC<UserItemType> = ({ photo, name, status, followed, id }) => {
  const dispatch = useAppDispatch()
  const onFollowClick = () => {
    if (!followed) {
      dispatch(follow(id))
    } else {
      dispatch(unfollow(id))
    }
  }

  return (
    <li>
      <Link to={`/profile/${id}`}>
        <img src={photo || noAvatarSmall} alt="user-avatar" />
      </Link>
      <p>{name}</p>
      <p>{status || 'Не придумал статус'}</p>
      <button
        onClick={onFollowClick}
        className="bg-slate-300 px-2 hover:bg-slate-100"
      >
        {followed ? 'unfollow' : 'follow'}
      </button>
    </li>
  )
}

export default UserItem
