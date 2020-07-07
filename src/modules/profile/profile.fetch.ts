import { types } from 'constants/actionTypes'
import { authAPI } from 'api/auth-api'
import { securityAPI } from 'api/security-api'
import { profileAPI } from 'api/profile-api'
// Types
import { 
  ProfileType,
} from 'types/types'

export const fetchProfile = (id: number) => ({
  type: types.GET_PROFILE.BASE,
  payload: profileAPI.getProfile(id)
})

export const fetchGetStatus = (id: number) => ({
  type: types.PROFILE_GET_STATUS.BASE,
  payload: profileAPI.getStatus(id)
})

export const fetchUpdateStatus = (text: string) => ({
  type: types.PROFILE_UPDATE_STATUS.BASE,
  payload: profileAPI.updateStatus(text),
  meta: text
})

export const fetchUploadPhoto = (photo: File) => ({
  type: types.PROFILE_UPLOAD_PHOTO.BASE,
  payload: profileAPI.uploadPhoto(photo)
})

export const fetchUpdateProfile = (profile: ProfileType) => ({
  type: types.UPDATE_PROFILE.BASE,
  payload: profileAPI.updateProfile(profile)
})
