import React, { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'

type RequireAuthProps = {
  children: JSX.Element
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const { isAuth } = useAppSelector((state) => state.auth)
  const location = useLocation()
  if (!isAuth) {
    return <Navigate to="/auth" state={{ from: location }} />
  }

  return children
}

export default RequireAuth
