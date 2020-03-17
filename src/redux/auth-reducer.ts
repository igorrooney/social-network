import { usersAPI, authAPI, securityAPI } from '../api/social-network-API'
import { stopSubmit } from 'redux-form'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from './redux-store'

const SET_AUTH_DATA = '/auth/SET_AUTH_DATA-POST'
const SET_CAPTCHA = '/auth/SET_CAPTCHA'

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captcha: null as string | null
};

export type initialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case SET_AUTH_DATA:
    case SET_CAPTCHA:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state
  }
}

type ActionsType = setAuthMeDataActionType | SetCaptchaActionType

type setAuthMeDataPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

type setAuthMeDataActionType = {
  type: typeof SET_AUTH_DATA
  payload: setAuthMeDataPayloadType
}
const setAuthMeData = (
  userId: number | null, 
  email: string | null, 
  login: string | null, 
  isAuth: boolean
): setAuthMeDataActionType => ({
  type: SET_AUTH_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth
  }
})


type SetCaptchaActionType = {
  type: typeof SET_CAPTCHA
  payload: {
    captcha: string
  } 
}
const setCaptcha = (captcha: string): SetCaptchaActionType => ({
  type: SET_CAPTCHA,
  payload: {
    captcha
  }
})

type DispatchType = Dispatch<ActionsType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const authMe = (): ThunkType => {
  return async (dispatch) => {
    const data = await usersAPI.authMe()
    if (data.resultCode === 0) {
      const { id, email, login } = data.data
      dispatch(setAuthMeData(id, email, login, true))
    }
  }
}

export const getCaptcha = (): ThunkType => {
  return async (dispatch) => {
    const captcha = await securityAPI.getCaptcha()
    dispatch(setCaptcha(captcha.url))
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
  return async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
      dispatch(authMe())
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptcha())
      }
      const message =
        data.messages.length > 0 ? data.messages[0] : 'Unknown error'
        // @ts-ignore
      dispatch(stopSubmit('loginForm', { _error: message }))
    }
  }
}

export const logOut = (): ThunkType => {
  return async (dispatch) => {
    const data = await authAPI.logOut();
    if (data.resultCode === 0) {
      dispatch(setAuthMeData(null, null, null, false))
    }
  }
}

export default authReducer
