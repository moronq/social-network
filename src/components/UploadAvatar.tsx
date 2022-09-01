import React, { useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { setPhoto } from '../store/slices/profileSlice/profileAction'
import Button from './common/Button/Button'

const UploadAvatar = () => {
  const dispatch = useAppDispatch()

  const [editMode, setEditMode] = useState(false)

  const onMainPhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      dispatch(setPhoto(e.target.files[0]))
      setEditMode(false)
    }
  }

  const disableEditMode = () => {
    setEditMode(false)
  }
  const enableEditMode = () => {
    setEditMode(true)
  }

  return editMode ? (
    <>
      <input type="file" onChange={(e) => onMainPhotoSelect(e)} />
      <Button onClick={disableEditMode}>Cancel</Button>
    </>
  ) : (
    <Button onClick={enableEditMode}>Change avatar</Button>
  )
}

export default UploadAvatar
