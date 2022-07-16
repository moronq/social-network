import { Navigate, Route, Routes } from 'react-router-dom'
import LayoutApp from './components/LayoutApp'
import MessagePage from './pages/MessagePage/MessagePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import UsersPage from './pages/UsersPage/UsersPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutApp />}>
        <Route path="users" element={<UsersPage />} />
        <Route path="message" element={<MessagePage />} />
        <Route path="profile/:id" element={<ProfilePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Route>
    </Routes>
  )
}

export default App
