import { FC } from 'react'
import noAvatarLarge from '../../assets/img/no-avatar-large.png'
import { useAppDispatch } from '../../hooks/redux'
import { startDialog } from '../../store/slices/dialogsSlice/dialogsAction'
import Button from '../common/Button/Button'
import UploadAvatar from '../UploadAvatar'
type PropsType = {
  photos: {
    large: string
    small: string
  }
  userId: string
}

const ProfileAvatar: FC<PropsType> = ({ photos, userId }) => {
  const dispatch = useAppDispatch()
  const onMessageClick = () => {
    dispatch(startDialog(userId))
  }

  return (
    <div className="flex flex-col gap-4">
      <img
        className="rounded-lg"
        src={photos.large || noAvatarLarge}
        alt="avatar"
        width="250px"
      />
      {userId === localStorage.getItem('userId') ? (
        <UploadAvatar />
      ) : (
        <Button onClick={onMessageClick}>Написать сообщение</Button>
      )}
    </div>
  )
}

export default ProfileAvatar
