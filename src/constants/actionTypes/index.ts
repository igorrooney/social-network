import { appTypes } from './app'
import { authTypes } from './auth'
import { profileTypes } from './profile'

export const actionTypeSuffix = {
  request: 'REQUEST',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

export const types = {
  ...appTypes,
  ...authTypes,
  ...profileTypes,
}
