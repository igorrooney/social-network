import { types } from 'constants/actionTypes'

export const actions = {
  addMessage: (message: string) => ({ 
    type: types.DIALOGS_ADD_MESSAGE,
    payload: message } as const)
}

export const addMessage = (message: string) => {
  return (dispatch: any) => dispatch(actions.addMessage(message))
}
