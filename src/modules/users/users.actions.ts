import { types } from 'constants/actionTypes'
import { InfernActionsTypes, BaseThunkType } from '../redux-store'
import { Dispatch } from 'redux'
import { 
  fetchUsers, 
  fetchFollowUser,
  fetchUnfollowUser,
} from './users.fetch'

export const actions = {
  setCurrentPage: (page: number) => ({ 
    type: types.USERS_SET_CURRENT_PAGE, 
    payload: page 
  } as const),
  setPortion: (portion: number) => ({ 
    type: types.USERS_SET_PORTION, 
    payload: portion 
  } as const),
}

export const setCurrentPage = (page: number) => {
  return (dispatch: any) => (
    dispatch(actions.setCurrentPage(page))
  )
}

export const setPortion = (portion: number) => {
  return (dispatch: any) => (
    dispatch(actions.setPortion(portion))
  )
}

export const requestUsers = (
  currentPage: number, 
  pageSize: number 
): ThunkType => {
  return async (dispatch: any) => {
    dispatch(actions.setCurrentPage(currentPage))
    return await dispatch(fetchUsers(currentPage, pageSize))
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