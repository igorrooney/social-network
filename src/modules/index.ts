import { combineReducers } from 'modules/redux-immer'
import produce from 'immer'
// Reducers
import app from './app/app.reducer'

const reducers = combineReducers(produce, {
  app,
})

export default reducers