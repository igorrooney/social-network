import { types } from 'constants/actionTypes'
import { AppStateType, InfernActionsTypes } from '../redux-store'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { authMe } from 'modules/auth/auth.actions'

export const actions = {
  initialSuccess: () => ({ type: types.APP_INITIAL_SUCCESS } as const),
  setError: (globalError: any) => ({ 
    type: types.APP_SET_ERROR, 
    payload: globalError } as const)
}

export const initializing = ():
  ThunkAction<void, AppStateType, unknown, AppActionsType> => {
  return async dispatch => {
    await dispatch(authMe())
    return await dispatch(actions.initialSuccess())
    }
  }

export const saveError = (error: any) => {
  return (dispatch: DispatchType) => {
    dispatch(actions.setError(error))
    return setTimeout(() => dispatch(actions.setError(null)), 3000)
  }
}

export type AppActionsType = InfernActionsTypes<typeof actions>
type DispatchType = Dispatch<AppActionsType>
