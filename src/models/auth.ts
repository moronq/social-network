export type userInfoLogin = {
  email: string
  password: string
  rememberMe: boolean
  captcha: null | string
}
export type userInfoLoginResponse = {
  resultCode: number
  messages: Array<string>
  data: {
    userId: number
  }
}
export type userLoginCaptcha = {
  url: string
}
export type userLoginResponseError = {
  type: 'error'
  message: string
}
export type userLoginResponseCaptcha = {
  type: 'captcha'
  captcha: string
  message: string
}
