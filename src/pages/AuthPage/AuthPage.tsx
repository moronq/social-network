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
    <div className="flex h-[calc(100vh-3rem)] w-full justify-center items-center">
      <form
        className="flex flex-col gap-7 p-10 w-96"
        onSubmit={(e) => onSubmit(e)}
      >
        <label>
          Email
          <input
            className="border-2 border-slate-400 p-1 w-full"
            type="text"
            autoComplete="off"
            {...email}
          />
        </label>
        <label>
          Password
          <input
            className="border-2 border-slate-400 p-1 w-full"
            type="password"
            {...password}
          />
        </label>
        {error && <p className="text-red-800">{error}</p>}
        <label className="flex gap-5">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={rememberMeHandler}
          />
          Remember me
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
        <button className="bg-indigo-400 text-white p-1">Войти</button>
      </form>
    </div>
  )
}

export default AuthPage
