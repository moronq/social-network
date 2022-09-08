import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import DialogItem from '../DialogItem/dialogItem'

const DialogList = () => {
  const { dialogList } = useAppSelector((state) => state.dialogs)

  return (
    <ul>
      {dialogList.map((el) => {
        return <DialogItem key={el.id} dialog={el} />
      })}
    </ul>
  )
}

export default DialogList
