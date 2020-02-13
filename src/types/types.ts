export type MessageType = {
  id: number
  message: string
}

export type PhotoType = {
  small: string
  large: string
}

export type DialogType = {
  id: number
  name: string
  photo: PhotoType | string
}

export type FriendType = {
  id: number
  name: string
  photo: string
  online: boolean
}

export type PostType = {
  id: number
  img: string
  message: string
  likeCount: number
}

export type ContactType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactType
  photos: PhotoType
}

export type UserType = {
  id: number
  name: string
  status: string
  photos: PhotoType
  followed: boolean
}

