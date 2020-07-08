import { types } from 'constants/actionTypes'
import {  InfernActionsTypes, BaseThunkType } from '../redux-store'
import { stopSubmit, FormAction } from 'redux-form'
import { ResultCodeEnum, ResultCodeWithCaptchaEnum } from 'api/social-network-API'
import { authAPI } from 'api/auth-api'
import {
  fetchAuthMe,
  fetchCaptcha,
  fetchLogin,
  fetchLogOut,
} from './auth.fetch'

const actions = {
  setAuthMeData: (
    userId: number | null, 
    email: string | null, 
    login: string | null, 
    isAuth: boolean
  ) => ({
    type: types.AUTH_SET_DATA,
    payload: { userId, email, login, isAuth }
  } as const),

  setCaptcha: (captcha: string) => ({
    type: types.AUTH_SET_CAPTCHA,
    payload: captcha
  } as const),
}

export const authMe = (): ThunkType => {
  return async (dispatch: any) => (
    await dispatch(fetchAuthMe())
  )
}

export const getCaptcha = (): ThunkType => {
  return async (dispatch: any) => {
    const { 
      value: { url } 
    } = await dispatch(fetchCaptcha())
    return dispatch(actions.setCaptcha(url))
  }
}

export const getLogin = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
  return async (dispatch: any) => {
    const {
      value: { messages, resultCode }
    } = await dispatch(fetchLogin(email, password, rememberMe, captcha))
    if (resultCode === ResultCodeEnum.Success) {
      dispatch(authMe())
    } else {
      if (resultCode === ResultCodeWithCaptchaEnum.CaptchaIsRequired) {
        dispatch(getCaptcha())
      }
      const message = messages.length > 0 ? messages[0] : 'Unknown error'
      dispatch(stopSubmit('loginForm', { _error: message }))
    }
  }
}

export const logOut = (): ThunkType => {
  return async (dispatch: any) => {
    return dispatch(fetchLogOut())
  }
}

type ActionsType = InfernActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>