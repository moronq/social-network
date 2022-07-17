import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getProfile } from '../../store/slices/profileSlice/profileAction'

type Params = {
  id?: string
}

const ProfilePage: FC = () => {
  const params = useParams<Params>()
  const dispatch = useAppDispatch()

  const userId = params.id ?? localStorage.getItem('userId')

  useEffect(() => {
    dispatch(getProfile(userId as string))
  }, [userId])

  const profileInfo = useAppSelector((state) => state.profile)

  return (
    <main className="grow">
      <img
        src={
          profileInfo.photos.large ||
          'https://cdn-icons-png.flaticon.com/512/149/149071.png'
        }
        alt="avatar"
        width="300px"
      />
      <div>{profileInfo.fullName}</div>
      <div>{profileInfo.aboutMe}</div>
      <ul>
        {profileInfo.lookingForAJob && <li>Нахожусь в поиске работы</li>}
        <li>{profileInfo.lookingForAJobDescription}</li>
      </ul>
    </main>
  )
}

export default ProfilePage
