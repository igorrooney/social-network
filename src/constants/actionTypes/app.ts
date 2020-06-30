import { createRequestTypes } from './utils'

const PREFIX = 'APP'
const createTypes = createRequestTypes(PREFIX)

export const appTypes = {
  APP_INITIAL_SUCCESS: createTypes('INITIAL_SUCCESS'),
  APP_SET_ERROR: createTypes('SET_ERROR'),
}