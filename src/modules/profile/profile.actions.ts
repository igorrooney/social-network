import { types } from 'constants/actionTypes'
import { InfernActionsTypes, BaseThunkType } from '../redux-store'
import { stopSubmit, FormAction } from 'redux-form'
import { 
  fetchProfile,
  fetchGetStatus,
  fetchUpdateStatus,
  fetchUploadPhoto,
  fetchUpdateProfile,
 } from './profile.fetch'
// Types
import { 
  ProfileType 
} from 'types/types'

export const actions = {
  addPost: (post: string, img: string, id: number) => ({ 
    type: types.PROFILE_ADD_POST, payload: {post, img, id 
  }} as const),
  setEditMode: () => ({ 
    type: types.PROFILE_SET_EDIT_MODE } as const ),
}

const _searchRegEx = (text: string, pattern: any) => {
  const result = pattern.exec(text)[0].split('->')
  return result
}

export const addPost = (post: string, img: string, id: number) => {
  return (dispatch: any) => dispatch(actions.addPost(post, img, id))
}

export const setEditMode = () => {
  return (dispatch: any) => dispatch(actions.setEditMode())
}

export const getProfile = (id: number): ThunkType => {
  return (dispatch: any) => dispatch(fetchProfile(id))
}

export const getStatus = (id: number): ThunkType => {
  return (dispatch: any) => dispatch(fetchGetStatus(id))
}

export const setNewStatus = (text: string): ThunkType => {
  return (dispatch: any) => dispatch(fetchUpdateStatus(text))
}

export const uploadPhoto = (photo: File): ThunkType => {
  return (dispatch: any) => dispatch(fetchUploadPhoto(photo))
}

export const updateProfileInfo = (profile: ProfileType): ThunkType => {
  return async dispatch => {
    const { 
      value: { resultCode, messages }
     }: any = await fetchUpdateProfile(profile)
    // const userId = getState().auth.userId
    const userId = 123
    if (userId) {
      if (resultCode === 0) {
        dispatch(getProfile(userId))
        dispatch(actions.setEditMode())
      } else {
        const error = messages[0]
        const errorMessage = error.split('(')[0]
        const pattern = /(Contacts->\w+)/g
        const errorArr = _searchRegEx(error, pattern)
        if (errorArr[0] === 'Contacts') {
          const errorField = errorArr[1].toLowerCase()
          const res = {} as any
          res.contacts = {}
          res.contacts[errorField] = error
          dispatch(
            stopSubmit('profileForm', {
              contacts: {
                [errorField]: errorMessage
              }
            })
          )
        }
      }
    } else {
      throw new Error("userId can't be null")
    }
    return Promise.reject(messages[0])
  } 
}


type ActionsType = InfernActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
