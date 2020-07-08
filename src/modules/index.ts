import { combineReducers } from 'redux-immer'
import produce from 'immer'
// Reducers
import dialogsReducer from './dialogs/dialogs.reducer'
import profileReducer from './profile/profile.reducer'
import usersReducer from './users/users.reducer'
import authReducer from './auth/auth.reducer'
import appReducer from './app/app.reducer'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers(produce, {
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})

export default reducers