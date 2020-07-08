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
  [types.AUTH_FETCH_DATA.BASE]: {
    SUCCESS: (draft, action) => {
      const {
        data: {
          email,
          id,
          login,
        },
        resultCode,
      } = action.payload
      if (resultCode === 1) {
        return draft
      }
      return {
        userId: id,
        login,
        email,
        isAuth: true,
      }
    }
  },
  [types.AUTH_FETCH_LOGOUT.BASE]: {
    SUCCESS: (draft, action) => {
      const { resultCode } = action.payload
      if (resultCode === 1) {
        return draft
      }
      const nextDraft = {
        userId: null,
        login: null,
        email: null,
        isAuth: false
      }
      return nextDraft
    }
  }
}, initialState.data)

const captcha = typeToReducer({
  [types.AUTH_SET_CAPTCHA.BASE]: {
    SUCCESS: (draft, action) => {
      return action.payload
    }
  }
}, initialState.captcha)

export type AuthInitialStateType = typeof initialState

export default combineReducers(produce, {
  data,
  captcha,
})
