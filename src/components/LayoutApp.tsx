import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { logout } from '../store/slices/authSlice/authSlice'
import SideBar from './SideBar/SideBar'
import noAvatarSmall from './../assets/img/no-avatar-small.png'

const LayoutApp = () => {
  const { isAuth } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const onLogoutClick = () => {
    dispatch(logout())
  }
  const avatar = localStorage.getItem('userAvatarSmall') || noAvatarSmall

  return (
    <>
      <nav className="bg-slate-200">
        <div className="flex justify-between border max-w-5xl mx-auto px-4 h-12 ">
          <div className="flex items-center hover:bg-slate-300 px-3 hover:cursor-pointer">
            logo
          </div>
          <div className="flex items-center hover:bg-slate-300 px-3 hover:cursor-pointer">
            <img
              src={avatar}
              alt="user-avatar"
              height={'40px'}
              width={'40px'}
              className="rounded-full"
            />
            {isAuth && (
              <button className=" ml-3" onClick={onLogoutClick}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
      <div className="max-w-5xl mx-auto px-4 flex gap-4 p-4">
        {isAuth && <SideBar />}
        <Outlet />
      </div>
    </>
  )
}

export default LayoutApp
