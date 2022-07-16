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
