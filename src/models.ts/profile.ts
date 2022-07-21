export type ProfileTypeResponse = {
  aboutMe: string
  userId: number | null
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: {
    small: string
    large: string
  }
}

export type ProfileTypeStatus = {
  status: string
}

export type ProfileType = ProfileTypeResponse & { error: string }

type ContactsType = {
  github: string | null
  vk: string | null
  facebook: string | null
  instagram: string | null
  twitter: string | null
  website: string | null
  youtube: string | null
  mainLkink: string | null
}

export type ProfileResponse = {
  resultCode: number
  data: any
  fieldsError: Array<string>
  messages: Array<string>
}
