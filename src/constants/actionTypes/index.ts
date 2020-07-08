import { appTypes } from './app'
import { authTypes } from './auth'
import { profileTypes } from './profile'
import { dialogsTypes } from './dialogs'
import { usersTypes } from './users'

export const actionTypeSuffix = {
  request: 'REQUEST',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

export const types = {
  ...appTypes,
  ...authTypes,
  ...profileTypes,
  ...dialogsTypes,
  ...usersTypes,
}
