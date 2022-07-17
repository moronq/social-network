export type UsersTypeResponse = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

export type UsersInitialType = UsersTypeResponse & {
  isLoadingUsers: boolean
  isFollowing: boolean
}
export type UserType = {
  name: string
  id: number
  uniqueUrlName: null | string
  photos: {
    small: null | string
    large: null | string
  }
  status: null | string
  followed: boolean
}
export type QuerryParams = {
  count: number
  page: number
  term?: string
}
export type FollowTypeResponse = {
  data: {}
  fieldsErrors: Array<string>
  messages: Array<string>
  resultCode: number
}
