import { combineReducers } from 'redux-immer'
import typeToReducer from 'type-to-reducer'
import produce from 'immer'
// ActionTypes
import { types } from 'constants/actionTypes'

const initialState = {
  data: {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
  },
  captcha: null as string | null
}

const data = typeToReducer({
  [types.AUTH_SET_DATA]: (draft, action) => {
    return action.payload
  }
}, initialState.data)

const captcha = typeToReducer({
  [types.AUTH_SET_CAPTCHA]: (draft, action) => {
    return action.payload
  }
}, initialState.captcha)

export type AuthInitialStateType = typeof initialState

export default combineReducers(produce, {
  data,
  captcha,
})
