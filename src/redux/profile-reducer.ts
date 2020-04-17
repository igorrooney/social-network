import { PostType, ProfileType, PhotoType } from './../types/types';
import { usersAPI } from '../api/social-network-API';
import { stopSubmit } from 'redux-form';
import store, { AppStateType } from './redux-store';
import { ThunkAction } from 'redux-thunk';

const ADD_POST = '/profile/ADD-POST';
const SET_PROFILE = '/profile/SET_PROFILE';
const SET_STATUS = '/profile/SET_STATUS';
const DELETE_POST = '/profile/DELETE_POST';
const SET_EDIT_MODE = '/profile/SET_EDIT_MODE';
const UPLOAD_PHOTO_SUCCESS = '/profile/UPLOAD_PHOTO_SUCCESS';
const IS_LOADING = '/profile/IS_LOADING';
const SET_AUTH_PROFILE = '/profile/SET_AUTH_PROFILE';

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

type ActionsType = 
  AddPostActionType | 
  DeletePostActionType | 
  SetProfileActionType |  
  SetAuthProfileActionType |
  SetIsLoadingActionType | 
  SetStatusActionType |
  UploadPhotoSuccessActionType |
  SetEditModeActionType

type AddPostActionType = {
  type: typeof ADD_POST,
  payload: {
    post: string
    img: string
    id: number
  }

}
export const addPost = (post: string, img: string, id: number): AddPostActionType => ({ type: ADD_POST, payload: {post, img, id }});

type DeletePostActionType = {
  type: typeof DELETE_POST
  postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId });

type SetProfileActionType = {
  type: typeof SET_PROFILE
  profile: ProfileType
}
export const setProfile = (profile: ProfileType): SetProfileActionType => ({ type: SET_PROFILE, profile });

type _AuthProfileType = {
  id: number,
  email: string,
  login: string
}

type SetAuthProfileActionType = {
  type: typeof SET_AUTH_PROFILE,
  authProfile: _AuthProfileType
}
export const setAuthProfile = (authProfile: SetAuthProfileActionType): SetAuthProfileActionType => ({
  type: SET_AUTH_PROFILE,
  // @ts-ignore
  authProfile
})

type SetIsLoadingActionType = {
  type: typeof IS_LOADING
  isLoading: boolean
}
export const setIsLoading = (isLoading: boolean): SetIsLoadingActionType => ({ type: IS_LOADING, isLoading })

type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status })

type UploadPhotoSuccessActionType = {
  type: typeof UPLOAD_PHOTO_SUCCESS
  photos: PhotoType
}
const uploadPhotoSuccess = (photos: PhotoType): UploadPhotoSuccessActionType => ({ type: UPLOAD_PHOTO_SUCCESS, photos });

type SetEditModeActionType = {
  type: typeof SET_EDIT_MODE
}
export const setEditMode = (): SetEditModeActionType => ({ type: SET_EDIT_MODE })

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getProfile = (id: number): ThunkType => {
  return async (dispatch) => {
    dispatch(setIsLoading(true))
    const data = await usersAPI.getProfile(id)
    dispatch(setProfile(data.data));
    if (store.getState().auth.userId === id) {
      dispatch(setAuthProfile(data.data))
    }
    dispatch(setIsLoading(false))
  }
}

export const getStatus = (id: number): ThunkType => {
  return async (dispatch) => {
    const data = await usersAPI.getStatus(id)
    dispatch(setStatus(data))
  }
}

export const setNewStatus = (text: string): ThunkType => {
  return async (dispatch) => {
    try {
      const data = await usersAPI.updateStatus(text)
      if (data.resultCode === 0) {
        dispatch(setStatus(text))
      }
    } catch (error) {
    }
  }
}

export const uploadPhoto = (photo: PhotoType): ThunkType => {
  return async (dispatch) => {
    const data = await usersAPI.uploadPhoto(photo)
    if (data.resultCode === 0) {
      dispatch(uploadPhotoSuccess(data.data.photos))
    }
  }
}

const _searchRegEx = (text: string, pattern: any) => {
    const result = pattern.exec(text)[0].split('->')
    return result
}

export const updateProfileInfo = (profile: ProfileType): ThunkType => {
  return async (dispatch, getState: () => AppStateType) => {
    const userId = getState().auth.userId;
    const data = await usersAPI.updateProfile(profile);
    if (userId) {
      if (data.resultCode === 0) {
        dispatch(getProfile(userId));
        dispatch(setEditMode());
      } else {
        const error = data.messages[0];
        const errorMessage = error.split('(')[0]
        const pattern = /(Contacts->\w+)/g;
        const errorArr = _searchRegEx(error, pattern)
        if (errorArr[0] === 'Contacts') {
          const errorField = errorArr[1].toLowerCase()
          const res = {} as any;
          res.contacts = {};
          res.contacts[errorField] = error;
          dispatch(
            stopSubmit('profileForm', {
              contacts: {
                [errorField]: errorMessage
              }
            })
          )
        }
        //dispatch(stopSubmit('profileForm', { _error: error }));
      }
    }

    return Promise.reject(data.messages[0]);
  }
}

export default profileReducer