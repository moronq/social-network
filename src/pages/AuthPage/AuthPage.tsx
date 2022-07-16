import React, { ReactHTMLElement, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import useInput from '../../hooks/useInput'
import { login } from '../../store/slices/authSlice/authAction'

const AuthPage = () => {
  const email = useInput('')
  const password = useInput('')
  const captchaInput = useInput('')
  const [rememberMe, setRememberMe] = useState(false)
  const dispatch = useAppDispatch()
  const { error, captcha } = useAppSelector((state) => state.auth)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(
      login({
        email: email.value,
        password: password.value,
        rememberMe,
        captcha: captchaInput.value || null,
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
        {error && <p className="text-red-800">{error}</p>}
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={rememberMeHandler}
          />
        </label>
        {captcha && (
          <label>
            <img src={captcha as string} alt="" />
            <input
              type="text"
              className="border-2 border-slate-400"
              {...captchaInput}
            />
          </label>
        )}
        <button>Войти</button>
      </form>
    </>
  )
}

export default AuthPage
