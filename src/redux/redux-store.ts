import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import friendsReducer from './friends-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk';
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

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InfernActionsTypes<T extends { [key: string]: (...args: any[])=>any}> = ReturnType<PropertiesTypes<T>>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// @ts-ignore
window.__store__ = store;

export default store;
