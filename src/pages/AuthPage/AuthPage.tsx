import React, { ReactHTMLElement, useState } from 'react'

const AuthPage = () => {
  const [login, setLogin] = useState('')

  const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
  }

  return (
    <>
      <form className="flex flex-col ">
        <label>
          <input
            className="border-2 border-slate-400"
            type="text"
            autoComplete="off"
            value={login}
            onChange={(e) => onChangeLogin(e)}
          />
        </label>
        <label>
          <input className="border-2 border-slate-400" type="password" />
        </label>
        <button>Войти</button>
      </form>
    </>
  )
}

export default AuthPage
