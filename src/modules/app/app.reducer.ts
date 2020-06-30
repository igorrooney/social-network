import { combineReducers } from 'redux-immer'
import typeToReducer from 'type-to-reducer'
import produce from 'immer'
// ActionTypes
import { types } from 'constants/actionTypes'

const initialState = {
  initialized: false,
  globalError: null as any // need to check
}

const initialized = typeToReducer({
  [types.APP_INITIAL_SUCCESS]: (draft, action) => {
    return true
  }
}, initialState.initialized)

const globalError = typeToReducer({
  [types.APP_SET_ERROR]: (draft, action) => {
    //const { globalError } = action.payload
    return action.payload
  }
}, initialState.globalError)

export type AppInitialStateType = typeof initialState 

export default combineReducers(produce, {
  initialized,
  globalError,
})
