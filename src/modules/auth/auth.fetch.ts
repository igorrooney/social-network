import { types } from 'constants/actionTypes'
import { authAPI } from 'api/auth-api'
import { securityAPI } from 'api/security-api'

export const fetchAuthMe = () => ({
  type: types.AUTH_SET_DATA,
  payload: authAPI.authMe()
})

export const fetchCaptcha = () => ({
  type: types.AUTH_SET_CAPTCHA,
  payload: securityAPI.getCaptcha()
})

export const fetchLogin = (
  email: string, 
  password: string, 
  rememberMe: boolean, 
  captcha: string,
) => ({
  type: types.AUTH_FETCH_LOGIN,
  payload: authAPI.login(email, password, rememberMe, captcha)
})

