import React, { FC } from 'react'
import { dialogType } from '../../models/dialogs'
import noAvatarLarge from '../../assets/img/no-avatar-large.png'

type PropsType = {
  dialog: dialogType
}

const DialogItem: FC<PropsType> = ({ dialog }) => {
  const avatar = dialog.photos.small || noAvatarLarge
  return (
    <li className="w-44 flex p-2 gap-2">
      <img src={avatar} alt="user-avatar" className="w-12 h-12 rounded-full " />
      <div>
        <p>{dialog.userName}</p>
        <p>{dialog.newMessagesCount}</p>
      </div>
    </li>
  )
}

export default DialogItem
