import { combineReducers } from 'redux-immer'
import typeToReducer from 'type-to-reducer'
import produce from 'immer'
// ActionTypes
import { types } from 'constants/actionTypes'
// Types
import { DialogType, MessageType } from 'types/types'

const initialState = {
  messages: [
    {
      id: 1,
      message: 'Hi'
    },
    {
      id: 2,
      message: 'How are you doing?'
    },
    {
      id: 3,
      message: 'Hello!!!'
    }
  ] as Array<MessageType>,
  dialogs: [
    {
      id: 1,
      name: 'Igor',
      photo: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg'
    },
    {
      id: 2,
      name: 'Olga',
      photo: 'http://mythemestore.com/friend-finder/images/users/user-2.jpg'
    },
    {
      id: 3,
      name: 'Maksym',
      photo: 'http://mythemestore.com/friend-finder/images/users/user-8.jpg'
    }
  ] as Array<DialogType>
}

const messages = typeToReducer({
  [types.DIALOGS_ADD_MESSAGE]: (draft, action) => {
    const message = action.payload
    const newMessage = {
      id: 4,
      message,
    }
    return [...draft, newMessage]
  }
}, initialState.messages)

const dialogs = typeToReducer({

}, initialState.dialogs)

export type DialogsInitialStateType = typeof initialState

export default combineReducers(produce, {
  messages,
  dialogs,
})

