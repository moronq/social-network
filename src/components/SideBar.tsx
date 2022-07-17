import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/profile">My profile</Link>
        </li>
        <li>
          <Link to="/message">Messages</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </aside>
  )
}

export default SideBar
