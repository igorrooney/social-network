import {createStore, combineReducers} from "redux";

import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import friendsReducer from "./friends-reducer";

const reducers = combineReducers({
  dialogsPage: dialogsReducer, 
  profilePage: profileReducer, 
  friendsBlock: friendsReducer
});

const store = createStore(reducers);

export default store;