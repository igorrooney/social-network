import { createRequestTypes } from './utils'

const PREFIX = 'DIALOGS'
const createTypes = createRequestTypes(PREFIX)

export const dialogsTypes = {
  DIALOGS_ADD_MESSAGE: createTypes('ADD_MESSAGE'),
}