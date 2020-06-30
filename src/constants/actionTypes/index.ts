import { appTypes } from './app'
import { authTypes } from './auth'

export const actionTypeSuffix = {
  request: 'REQUEST',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

export const types = {
  ...appTypes,
  ...authTypes,
}
