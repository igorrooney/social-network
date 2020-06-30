import { createStore, combineReducers, applyMiddleware, Action } from 'redux'
import {createPromise} from 'redux-promise-middleware'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk, { ThunkAction } from 'redux-thunk'
// Utils
import { actionTypeSuffix } from 'constants/actionTypes'
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import friendsReducer from './friends-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth/auth.reducer'
import appReducer from './app/app.reducer'
import { reducer as formReducer } from 'redux-form';

export const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  friendsBlock: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})

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


const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk, promiseMiddleware)
))

// @ts-ignore
window.__store__ = store

export default store
