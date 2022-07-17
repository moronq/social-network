import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LayoutApp from './components/LayoutApp'
import RequireAuth from './hoc/RequireAuth'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import AuthPage from './pages/AuthPage/AuthPage'
import MessagePage from './pages/MessagePage/MessagePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import UsersPage from './pages/UsersPage/UsersPage'
import { setIsAuth, setUserId } from './store/slices/authSlice/authSlice'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(setIsAuth(true))
      dispatch(setUserId(parseInt(localStorage.getItem('userId') as string)))
    }
  }, [])

  const { isAuth } = useAppSelector((state) => state.auth)

  return (
    <Routes>
      <Route path="/" element={<LayoutApp />}>
        <Route index element={<Navigate to={'/profile'} replace />} />
        <Route
          path="users"
          element={<RequireAuth children={<UsersPage />} />}
        />
        <Route
          path="message"
          element={<RequireAuth children={<MessagePage />} />}
        />
        <Route path="profile/:id" element={<ProfilePage />} />
        <Route
          path="profile"
          element={<RequireAuth children={<ProfilePage />} />}
        />
        <Route
          path="auth"
          element={isAuth ? <Navigate to={'/profile'} replace /> : <AuthPage />}
        />
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Route>
    </Routes>
  )
}

export default App
