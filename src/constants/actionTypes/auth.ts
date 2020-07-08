import { createRequestTypes } from './utils'

const PREFIX = 'AUTH'
const createTypes = createRequestTypes(PREFIX)

export const authTypes = {
  AUTH_FETCH_DATA: createTypes.asyncType('FETCH_DATA'),
  AUTH_SET_CAPTCHA: createTypes.asyncType('SET_CAPTCHA'),
  AUTH_FETCH_LOGIN: createTypes.asyncType('FETCH_LOGIN'),
  AUTH_FETCH_LOGOUT: createTypes.asyncType('FETCH_LOGOUT'),
  AUTH_SET_DATA: createTypes('SET_DATA'),
}