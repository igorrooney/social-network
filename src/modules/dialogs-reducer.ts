import { MessageType, DialogType } from '../types/types'
import { InfernActionsTypes } from './redux-store'
import { ADD_MESSAGE } from './actionTypes'

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

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: 4,
        message: action.message
      }
      return {
        ...state,
        messages: [...state.messages, newMessage]
      }

    default:
      return state
  }
}

export const actions = {
  addMessage: (message: string) => ({ type: ADD_MESSAGE, message } as const)
}

export default dialogsReducer

export type InitialStateType = typeof initialState 
type ActionsType = InfernActionsTypes<typeof actions>
