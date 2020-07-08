import { createRequestTypes } from './utils'

const PREFIX = 'USERS'
const createTypes = createRequestTypes(PREFIX)

export const usersTypes = {
  USERS_FOLLOW: createTypes.asyncType('FOLLOW'),
  USERS_UNFOLLOW: createTypes.asyncType('UNFOLLOW'),
  GET_USERS: createTypes.asyncType('GET'),
  USERS_SET_CURRENT_PAGE: createTypes('SET_CURRENT_PAGE'),
  USERS_SET_PORTION: createTypes('SET_PORTION'),
}