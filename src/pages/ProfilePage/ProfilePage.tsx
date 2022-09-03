import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProfileAvatar from '../../components/ProfileAvatar/ProfileAvatar'
import UserInfo from '../../components/ProfileInfo'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
  getProfile,
  getStatus,
} from '../../store/slices/profileSlice/profileAction'

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

  return (
    <main className="grow flex gap-4">
      <ProfileAvatar photos={profileInfo.photos} userId={userId as string} />
      <UserInfo profileInfo={profileInfo} userId={userId as string} />
    </main>
  )
}

export default ProfilePage
