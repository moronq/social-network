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
  console.log(userId)

  useEffect(() => {
    dispatch(getProfile(userId as string))
  }, [])

  return (
    <main className="grow">
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="avatar"
        width="300px"
      />
      <ul></ul>
    </main>
  )
}

export default ProfilePage
