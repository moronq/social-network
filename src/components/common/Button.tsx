import React, { FC } from 'react'

type PropsType = {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: FC<PropsType> = ({ children, onClick }) => {
  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button
      onClick={(e) => onClickHandler(e)}
      className=" border border-slate-300 px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200"
    >
      {children}
    </button>
  )
}

export default Button
