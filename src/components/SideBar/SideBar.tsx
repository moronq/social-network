import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <aside>
      <ul className="flex flex-col w-36 gap-0.5 cursor-pointer">
        <li>
          <Link to="/profile">
            <div className="px-2 rounded-md hover:bg-slate-100 ">
              My profile
            </div>
          </Link>
        </li>
        <li>
          <Link to="/message">
            <div className="px-2 rounded-md hover:bg-slate-100">Messages</div>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <div className="px-2 rounded-md hover:bg-slate-100">Users</div>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default SideBar
