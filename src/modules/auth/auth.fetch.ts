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