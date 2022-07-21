import axios from 'axios'
import {
  userInfoLogin,
  userInfoLoginResponse,
  userLoginCaptcha,
} from '../models/auth'
import { ProfileResponse, ProfileTypeResponse } from '../models/profile'
import { FollowTypeResponse, UsersTypeResponse } from '../models/users'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'c20cb63c-22e4-4d92-a542-582215d9946d',
  },
})

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(userInfo: userInfoLogin) {
    return instance.post<userInfoLoginResponse>('auth/login', userInfo)
  },
  logout() {
    return instance.delete('auth/login')
  },
}

export const securityAPI = {
  getCaptchaURL() {
    return instance.get<userLoginCaptcha>('security/get-captcha-url')
  },
}

export const profileAPI = {
  getProfile(userId: string) {
    return instance.get<ProfileTypeResponse>(`profile/${userId}`)
  },
  getStatus(userId: string) {
    return instance.get<ProfileResponse>('profile/status/' + userId)
  },
  setStatus(status: string) {
    return instance.put<ProfileResponse>('profile/status', { status: status })
  },
  setPhoto(image: File) {
    const formData = new FormData()
    formData.append('image', image)
    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}

export const usersAPI = {
  getUsers(count: number = 10, page: number = 1) {
    return instance.get<UsersTypeResponse>(`users?count=${count}&page=${page}`)
  },
  follow(userId: number) {
    return instance.post<FollowTypeResponse>(`follow/${userId}`)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
  },
  search(search: string) {
    return instance.get<Array<UsersTypeResponse>>(`users?term=${search}`)
  },
}
