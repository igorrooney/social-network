import { types } from 'constants/actionTypes'
import { authAPI } from 'api/auth-api'
import { securityAPI } from 'api/security-api'

export const fetchAuthMe = () => ({
  type: types.AUTH_FETCH_DATA.BASE,
  payload: authAPI.authMe()
})

export const fetchCaptcha = () => ({
  type: types.AUTH_SET_CAPTCHA.BASE,
  payload: securityAPI.getCaptcha()
})

export const fetchLogin = (
  email: string, 
  password: string, 
  rememberMe: boolean, 
  captcha: string,
) => ({
  type: types.AUTH_FETCH_LOGIN.BASE,
  payload: authAPI.login(email, password, rememberMe, captcha)
})

export const fetchLogOut = () => ({
  type: types.AUTH_FETCH_LOGOUT.BASE,
  payload: authAPI.logOut()
})
