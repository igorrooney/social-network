import { createRequestTypes } from './utils'

const PREFIX = 'AUTH'
const createTypes = createRequestTypes(PREFIX)

export const authTypes = {
  AUTH_SET_DATA: createTypes('SET_DATA'),
  AUTH_SET_CAPTCHA: createTypes('SET_CAPTCHA'),
}