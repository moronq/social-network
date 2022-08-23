import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <aside>
      <ul className="flex flex-col w-36 gap-0.5 cursor-pointer">
        <li className="px-2 rounded-md hover:bg-slate-100 ">
          <Link to="/profile">My profile</Link>
        </li>
        <li className="px-2 rounded-md hover:bg-slate-100">
          <Link to="/message">Messages</Link>
        </li>
        <li className="px-2 rounded-md hover:bg-slate-100">
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </aside>
  )
}

export default SideBar
