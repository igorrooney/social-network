import { types } from 'constants/actionTypes'
import {  InfernActionsTypes, BaseThunkType } from '../redux-store'
import { stopSubmit, FormAction } from 'redux-form'
import { ResultCodeEnum, ResultCodeWithCaptchaEnum } from 'api/social-network-API'
import { authAPI } from 'api/auth-api'
import {
  fetchAuthMe,
  fetchCaptcha,
} from './auth.fetch'

export const actions = {
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
  return async dispatch => {
    const { payload } = await fetchAuthMe()
    if ((await payload).resultCode === ResultCodeEnum.Success) {
      const { id, email, login } = (await payload).data
      dispatch(actions.setAuthMeData(id, email, login, true))
    }
  }
}

export const getCaptcha = (): ThunkType => {
  return async dispatch => {
    const { payload } = await fetchCaptcha()
    dispatch(actions.setCaptcha((await payload).url))
  }
}

export const getLogin = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
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

type ActionsType = InfernActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>