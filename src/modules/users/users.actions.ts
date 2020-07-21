import { types } from 'constants/actionTypes'
import { InfernActionsTypes, BaseThunkType } from '../redux-store'
import { Dispatch } from 'redux'
import { 
  fetchUsers, 
  fetchFollowUser,
  fetchUnfollowUser,
} from './users.fetch'
// Types
import { QueryType } from './users.reducer'
import { selectQuery } from './users.selectors'

export const actions = {
  changeQuery:(nextQuery: QueryType) => ({
    type: types.CHANGE_USERS_QUERY,
    payload: nextQuery
  } as const),
  resetQuery: () => ({
    type: types.RESET_USERS_QUERY
  }),
  setPortion: (portion: number) => ({ 
    type: types.USERS_SET_PORTION, 
    payload: portion 
  } as const),
}

export const changeQuery = (nextQuery: QueryType) => {
  return (dispatch: any) => (
    dispatch(actions.changeQuery(nextQuery))
  )
}

export const resetQuery = () => {
  return (dispatch: any) => (
    dispatch(actions.resetQuery())
  )
}

export const setPortion = (portion: number) => {
  return (dispatch: any) => (
    dispatch(actions.setPortion(portion))
  )
}

export const requestUsers = (): ThunkType => {
  return async (dispatch: any, getState ) => {
    const query = selectQuery(getState())
    return await dispatch(fetchUsers(query))
  }
}

export const followUser = (id: number): ThunkType => {
  return (dispatch: any) => (
    dispatch(fetchFollowUser(id))
  )
}

export const unfollowUser = (id: number): ThunkType => {
  return (dispatch: any) => (
    dispatch(fetchUnfollowUser(id))
  )
}

type ActionsType = InfernActionsTypes<typeof actions>  
type DispatchType = Dispatch<ActionsType>
type ThunkType = BaseThunkType<ActionsType>