import { ThunkAction } from 'redux-thunk'
import { stopSubmit } from 'redux-form'

import { 
  PostType, 
  PhotoType,
  AuthProfileType, 
  ProfileType 
} from './../types/types'
import { usersAPI } from '../api/social-network-API'
import store, { AppStateType, InfernActionsTypes } from './redux-store'

const ADD_POST = '/profile/ADD-POST'
const SET_PROFILE = '/profile/SET_PROFILE'
const SET_STATUS = '/profile/SET_STATUS'
const DELETE_POST = '/profile/DELETE_POST'
const SET_EDIT_MODE = '/profile/SET_EDIT_MODE'
const UPLOAD_PHOTO_SUCCESS = '/profile/UPLOAD_PHOTO_SUCCESS'
const IS_LOADING = '/profile/IS_LOADING'
const SET_AUTH_PROFILE = '/profile/SET_AUTH_PROFILE'

const initialState = {
  posts: [
    {
      id: 1,
      img: 'https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg',
      message: 'Hi, how are you?',
      likeCount: 5
    },
    {
      id: 12,
      img: 'https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg',
      message: "It's my first post",
      likeCount: 1
    }
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  editMode: false,
  isLoading: true,
  authProfile: null as any,
  newTextPost: ''
}

type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: action.payload.id,
        img: action.payload.img,
        message: action.payload.post,
        likeCount: 0
      }
      return {
        ...state,
        posts: [newPost, ...state.posts],
        newTextPost: ''
      }

    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    case SET_AUTH_PROFILE:
      return {
        ...state,
        authProfile: action.authProfile
      };

    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      };

    case SET_EDIT_MODE:
      return {
        ...state,
        editMode: !state.editMode
      };

    case UPLOAD_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos
        } as any
      };

    default:
      return state;
  }
}

type ActionsType = InfernActionsTypes<typeof actions>

export const actions = {
  addPost: (post: string, img: string, id: number) => ({ type: ADD_POST, payload: {post, img, id }} as const),
  deletePost: (postId: number) => ({ type: DELETE_POST, postId } as const ),
  setProfile: (profile: ProfileType) => ({ type: SET_PROFILE, profile } as const),
  setAuthProfile: (authProfile: AuthProfileType) => ({ type: SET_AUTH_PROFILE, authProfile } as const ),
  setIsLoading: (isLoading: boolean) => ({ type: IS_LOADING, isLoading } as const ),
  setStatus: (status: string) => ({ type: SET_STATUS, status } as const ),
  uploadPhotoSuccess: (photos: PhotoType) => ({ type: UPLOAD_PHOTO_SUCCESS, photos } as const ),
  setEditMode: () => ({ type: SET_EDIT_MODE } as const )
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getProfile = (id: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.setIsLoading(true))
    const data = await usersAPI.getProfile(id)
    dispatch(actions.setProfile(data))
    if (store.getState().auth.userId === id) {
      dispatch(actions.setAuthProfile(data))
    }
    dispatch(actions.setIsLoading(false))
  }
}

export const getStatus = (id: number): ThunkType => {
  return async (dispatch) => {
    const data = await usersAPI.getStatus(id)
    dispatch(actions.setStatus(data))
  }
}

export const setNewStatus = (text: string): ThunkType => {
  return async (dispatch) => {
    try {
      const data = await usersAPI.updateStatus(text)
      if (data.resultCode === 0) {
        dispatch(actions.setStatus(text))
      }
    } catch (error) {
    }
  }
}

export const uploadPhoto = (photo: PhotoType): ThunkType => {
  return async (dispatch) => {
    const data = await usersAPI.uploadPhoto(photo)
    if (data.resultCode === 0) {
      dispatch(actions.uploadPhotoSuccess(data.data.photos))
    }
  }
}

const _searchRegEx = (text: string, pattern: any) => {
    const result = pattern.exec(text)[0].split('->')
    return result
}

export const updateProfileInfo = (profile: ProfileType): ThunkType => {
  return async (dispatch, getState: () => AppStateType) => {
    const userId = getState().auth.userId
    const data = await usersAPI.updateProfile(profile)
    if (userId) {
      if (data.resultCode === 0) {
        dispatch(getProfile(userId))
        dispatch(actions.setEditMode())
      } else {
        const error = data.messages[0]
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
    }

    return Promise.reject(data.messages[0])
  }
}

export default profileReducer