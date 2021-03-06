import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProfileStatus from '../../components/ProfileStatus'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
  getProfile,
  getStatus,
  setPhoto,
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
  const onMainPhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      dispatch(setPhoto(e.target.files[0]))
    }
  }

  return (
    <main className="grow">
      <img
        src={profileInfo.photos.large || noAvatarLarge}
        alt="avatar"
        width="300px"
      />
      {userId === localStorage.getItem('userId') && (
        <input type="file" onChange={(e) => onMainPhotoSelect(e)} />
      )}
      <div>{profileInfo.fullName}</div>
      <div>{profileInfo.aboutMe}</div>
      <ProfileStatus userId={userId as string} status={profileInfo.status} />
      <ul>
        {profileInfo.lookingForAJob && <li>Нахожусь в поиске работы</li>}
        <li>{profileInfo.lookingForAJobDescription}</li>
      </ul>
    </main>
  )
}

export default ProfilePage
