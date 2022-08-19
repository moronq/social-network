import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProfileStatus from '../../components/ProfileStatus'
import UploadAvatar from '../../components/UploadAvatar'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
  getProfile,
  getStatus,
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
  const {
    fullName,
    aboutMe,
    status,
    lookingForAJob,
    lookingForAJobDescription,
    photos,
  } = profileInfo

  return (
    <main className="grow">
      <img src={photos.large || noAvatarLarge} alt="avatar" width="300px" />
      {userId === localStorage.getItem('userId') ? (
        <UploadAvatar />
      ) : (
        <button>Написать сообщение</button>
      )}
      <p>{fullName}</p>
      <p>{aboutMe}</p>
      <ProfileStatus userId={userId as string} status={status} />
      <ul>
        {lookingForAJob && <li>Нахожусь в поиске работы</li>}
        <li>{lookingForAJobDescription}</li>
      </ul>
    </main>
  )
}

export default ProfilePage
