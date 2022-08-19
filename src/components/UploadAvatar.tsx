import React, { useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { setPhoto } from '../store/slices/profileSlice/profileAction'

const UploadAvatar = () => {
  const dispatch = useAppDispatch()

  const [editMode, setEditMode] = useState(false)

  const onMainPhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      dispatch(setPhoto(e.target.files[0]))
      setEditMode(false)
    }
  }

  return editMode ? (
    <>
      <input type="file" onChange={(e) => onMainPhotoSelect(e)} />
      <button onClick={() => setEditMode(false)}>отменить</button>
    </>
  ) : (
    <button onClick={() => setEditMode(true)}>изменить аватар</button>
  )
}

export default UploadAvatar
