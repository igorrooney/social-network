import { createStore, combineReducers, applyMiddleware } from 'redux';

import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import friendsReducer from './friends-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  friendsBlock: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
