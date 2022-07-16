import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutApp = () => {
  return (
    <>
      <nav className=" bg-slate-200">
        <div className="flex justify-between border max-w-5xl mx-auto px-4 h-12 ">
          <div className="flex items-center hover:bg-slate-300 px-3 hover:cursor-pointer">
            logo
          </div>
          <div className="flex items-center hover:bg-slate-300 px-3 hover:cursor-pointer">
            user
          </div>
        </div>
      </nav>
      <div className="max-w-5xl mx-auto px-4">
        <Outlet />
      </div>
    </>
  )
}

export default LayoutApp
