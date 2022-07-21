import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import {
  getStatus,
  setStatus,
} from '../store/slices/profileSlice/profileAction'

type ProfileStatusProps = {
  userId: string
  status: string
}

const ProfileStatus: FC<ProfileStatusProps> = ({ userId, status }) => {
  const dispatch = useAppDispatch()

  const [isStatusChanging, setIsStatusChanging] = useState(false)
  const [statusInput, setStatusInput] = useState(status)
  useEffect(() => {
    setStatusInput(status)
  }, [status])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatusInput(e.target.value)
  }
  const changeStatus = () => {
    setIsStatusChanging(true)
  }
  const applyStatus = () => {
    dispatch(setStatus({ status: statusInput, userId: userId as string }))
    setIsStatusChanging(false)
  }

  return (
    <>
      {isStatusChanging ? (
        <input
          type={'text'}
          value={statusInput}
          onChange={(e) => onChange(e)}
          onBlur={applyStatus}
          autoFocus={true}
        />
      ) : (
        <div onClick={changeStatus}>{status || 'нет статуса'}</div>
      )}
    </>
  )
}

export default ProfileStatus
