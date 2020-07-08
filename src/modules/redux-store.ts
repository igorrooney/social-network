import { createStore, applyMiddleware, Action } from 'redux'
import { createPromise } from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkAction } from 'redux-thunk'
import {createLogger} from 'redux-logger'
import freeze from 'redux-freeze'
import promise from 'redux-promise-middleware'
// Utils
import { actionTypeSuffix } from 'constants/actionTypes'
// Reducers
import reducers from 'modules'

export type AppStateType = ReturnType<typeof reducers>

export type InfernActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never 
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

const promiseMiddleware = createPromise({
  promiseTypeSuffixes: [
    actionTypeSuffix.request,
    actionTypeSuffix.success,
    actionTypeSuffix.failure,
  ]
})

const logger = createLogger({
  diff: true,
  collapsed: true,
})

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk, promiseMiddleware, logger, freeze, promise)
))

export default store
