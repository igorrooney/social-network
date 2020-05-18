import { Dispatch } from 'redux'
import { authMe } from './auth-reducer'
import { ThunkAction } from 'redux-thunk'
import { AppStateType, InfernActionsTypes } from './redux-store'
import { INITIAL_SUCCESS, SET_ERROR } from './actionTypes'

const initialState = {
  initialized: false,
  globalError: null as any // need to check
}

export type InitialStateType = typeof initialState 

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case INITIAL_SUCCESS:
      return {
        ...state,
        initialized: true
      }

    case SET_ERROR:
      return {
        ...state,
        globalError: action.globalError
      }

    default:
      return state
  }
}

type ActionsType = InfernActionsTypes<typeof actions>

export const actions = {
  initialSuccess: () => ({ type: INITIAL_SUCCESS } as const),
  setError: (globalError: any) => ({ type: SET_ERROR, globalError } as const)
}

type DispatchType = Dispatch<ActionsType>

export const initializing = ():
  ThunkAction<void, AppStateType, unknown, ActionsType> => {
  return (dispatch) => {
    const auth = dispatch(authMe())
    Promise.all([auth]).then(() => {
      dispatch(actions.initialSuccess())
    })
  }
}

export const saveError = (error: any) => {
  return (dispatch: DispatchType) => {
    dispatch(actions.setError(error))
    setTimeout(() => dispatch(actions.setError(null)), 3000)
  }
}

export default appReducer
