import { createStore, combineReducers } from 'redux';

import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import friendsReducer from './friends-reducer';
import usersReducer from './users-reducer';

const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  friendsBlock: friendsReducer,
  usersPage: usersReducer
});

const store = createStore(reducers);

export default store;
