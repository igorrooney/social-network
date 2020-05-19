import { createStore, combineReducers, applyMiddleware, compose, Action } from 'redux'

import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import friendsReducer from './friends-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunk, { ThunkAction } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';

export const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  friendsBlock: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
})

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

export type InfernActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never 
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// @ts-ignore
window.__store__ = store;

export default store;
