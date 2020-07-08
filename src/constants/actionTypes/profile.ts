import { createRequestTypes } from './utils'

const PREFIX = 'PROFILE'
const createTypes = createRequestTypes(PREFIX)

export const profileTypes = {
  GET_PROFILE: createTypes.asyncType('GET'),
  UPDATE_PROFILE: createTypes.asyncType('UPDATE'),
  PROFILE_GET_STATUS: createTypes.asyncType('GET_STATUS'),
  PROFILE_UPDATE_STATUS: createTypes.asyncType('UPDATE_STATUS'),
  PROFILE_UPLOAD_PHOTO: createTypes.asyncType('UPLOAD_PHOTO_SUCCESS'),
  PROFILE_ADD_POST: createTypes('ADD_POST'),
  PROFILE_IS_LOADING: createTypes('IS_LOADING'),
  PROFILE_DELETE_POST: createTypes('DELETE_POST'),
  PROFILE_SET_EDIT_MODE: createTypes('SET_EDIT_MODE'),
}