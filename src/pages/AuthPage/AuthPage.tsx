import React, { ReactHTMLElement, useState } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import useInput from '../../hooks/useInput'
import { login } from '../../store/slices/authSlice/authSlice'

const AuthPage = () => {
  const email = useInput('')
  const password = useInput('')
  const [rememberMe, setRememberMe] = useState(false)
  const dispatch = useAppDispatch()
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(
      login({
        email: email.value,
        password: password.value,
        rememberMe,
        captcha: null,
      })
    )
  }
  const rememberMeHandler = () => {
    setRememberMe((prev) => (prev = !prev))
  }
  return (
    <>
      <form className="flex flex-col " onSubmit={(e) => onSubmit(e)}>
        <label>
          <input
            className="border-2 border-slate-400"
            type="text"
            autoComplete="off"
            {...email}
          />
        </label>
        <label>
          <input
            className="border-2 border-slate-400"
            type="password"
            {...password}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={rememberMeHandler}
          />
        </label>
        <button>Войти</button>
      </form>
    </>
  )
}

export default AuthPage
