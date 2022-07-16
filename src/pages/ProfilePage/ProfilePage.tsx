import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'

type Params = {
  id?: string
}

const ProfilePage: FC = () => {
  // const params = useParams<Params>()
  // const userId = params.id ??
  const { isAuth } = useAppSelector((state) => state.auth)
  console.log(isAuth)
  return (
    <>
      {!isAuth ? (
        <p>You are not authorized</p>
      ) : (
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="avatar"
            width="300px"
          />
          <ul></ul>
        </div>
      )}
    </>
  )
}

export default ProfilePage
