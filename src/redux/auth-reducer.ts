import { stopSubmit, FormAction } from 'redux-form'

import { ResultCodeEnum, ResultCodeWithCaptchaEnum } from 'api/social-network-API'
import { authAPI } from 'api/auth-api'
import { securityAPI } from 'api/security-api'
import { InfernActionsTypes, BaseThunkType } from './redux-store'
import { SET_AUTH_DATA, SET_CAPTCHA } from './actionTypes'

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captcha: null as string | null
}

const authReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case SET_AUTH_DATA:
    case SET_CAPTCHA:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}

export const actions = {
  setAuthMeData: (
    userId: number | null, 
    email: string | null, 
    login: string | null, 
    isAuth: boolean
  ) => ({
    type: SET_AUTH_DATA,
    payload: { userId, email, login, isAuth }
  } as const),

  setCaptcha: (captcha: string) => ({
    type: SET_CAPTCHA,
    payload: { captcha }
  } as const),
}

export const authMe = (): ThunkType => {
  return async dispatch => {
    const data = await authAPI.authMe()
    if (data.resultCode === ResultCodeEnum.Success) {
      const { id, email, login } = data.data
      dispatch(actions.setAuthMeData(id, email, login, true))
    }
  }
}

export const getCaptcha = (): ThunkType => {
  return async dispatch => {
    const captcha = await securityAPI.getCaptcha()
    dispatch(actions.setCaptcha(captcha.url))
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
  return async dispatch => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(authMe())
    } else {
      if (data.resultCode === ResultCodeWithCaptchaEnum.CaptchaIsRequired) {
        dispatch(getCaptcha())
      }
      const message = data.messages.length > 0 ? data.messages[0] : 'Unknown error'
      dispatch(stopSubmit('loginForm', { _error: message }))
    }
  }
}

export const logOut = (): ThunkType => {
  return async dispatch => {
    const data = await authAPI.logOut()
    if (data.resultCode === 0) {
      dispatch(actions.setAuthMeData(null, null, null, false))
    }
  }
}

export default authReducer

export type initialStateType = typeof initialState
type ActionsType = InfernActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
