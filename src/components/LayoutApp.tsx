import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutApp = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default LayoutApp
