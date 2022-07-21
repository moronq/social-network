import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import useInput from '../../hooks/useInput'
import {
  getProfile,
  getStatus,
  setStatus,
} from '../../store/slices/profileSlice/profileAction'
import noAvatarLarge from './../../assets/img/no-avatar-large.png'

type Params = {
  id?: string
}

const ProfilePage: FC = () => {
  const params = useParams<Params>()
  const dispatch = useAppDispatch()

  const userId = params.id ?? localStorage.getItem('userId')

  useEffect(() => {
    dispatch(getProfile(userId as string)).then((res) =>
      dispatch(getStatus(userId as string))
    )
  }, [userId])

  const profileInfo = useAppSelector((state) => state.profile)
  const [isStatusChanging, setIsStatusChanging] = useState(false)
  const status = useInput('')
  const changeStatus = () => {
    setIsStatusChanging(true)
  }
  const applyStatus = () => {
    if (status.value.length > 1) {
      dispatch(setStatus({ status: status.value, userId: userId as string }))
      status.setValue('')
    }
    setIsStatusChanging(false)
  }
  return (
    <main className="grow">
      <img
        src={profileInfo.photos.large || noAvatarLarge}
        alt="avatar"
        width="300px"
      />
      <div>{profileInfo.fullName}</div>
      <div>{profileInfo.aboutMe}</div>
      {isStatusChanging ? (
        <input
          type={'text'}
          {...status}
          onBlur={applyStatus}
          autoFocus={true}
        />
      ) : (
        <div onClick={changeStatus}>{profileInfo.status || 'нет статуса'}</div>
      )}
      <ul>
        {profileInfo.lookingForAJob && <li>Нахожусь в поиске работы</li>}
        <li>{profileInfo.lookingForAJobDescription}</li>
      </ul>
    </main>
  )
}

export default ProfilePage
