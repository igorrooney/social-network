import { Dispatch } from 'redux'

import { 
  InfernActionsTypes, 
  BaseThunkType
} from './redux-store'
import { UserType } from 'types/types'
import { usersAPI } from 'api/users-api'
import { 
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_TOTAL_COUNT_PAGES,
  SET_CURRENT_PAGE,
  SET_PORTION,
  SET_IS_LOADING,
  TOGGLE_IS_FOLLOWING_PROGRESS,
} from './actionTypes'

const initialState = {
  users: [] as Array<UserType>,
  portion: 1,
  totalCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number> // array of users id
}

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true
            }
          }
          return user
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false
            }
          }
          return user
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: action.users
      }

    case SET_TOTAL_COUNT_PAGES:
      return {
        ...state,
        totalCount: action.pages
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }

    case SET_PORTION:
      return {
        ...state,
        portion: action.portion
      }

    case SET_IS_LOADING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching ? 
          [...state.followingInProgress, action.userId] : 
          state.followingInProgress.filter(id => id !== action.userId)
      }

    default:
      return state
  }
}

export const actions = {
  follow: (userId: number) => ({ type: FOLLOW, userId } as const),
  unfollow: (userId: number) => ({ type: UNFOLLOW, userId } as const),
  setUsers: (users: Array<UserType>) => ({ type: SET_USERS, users } as const),
  setTotalCountPages: (pages: number) => ({ type: SET_TOTAL_COUNT_PAGES, pages } as const),
  setCurrentPage: (page: number) => ({ type: SET_CURRENT_PAGE, page } as const),
  setPortion: (portion: number) => ({ type: SET_PORTION, portion } as const),
  setIsLoading: (isFetching: boolean) => ({ type: SET_IS_LOADING, isFetching } as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } as const)
}

export const requestUsers = (
  currentPage: number, 
  pageSize: number 
): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(actions.setCurrentPage(currentPage))
    dispatch(actions.setIsLoading(true))
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(actions.setIsLoading(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalCountPages(data.totalCount))
  }
}

const _followUnfollowFlow = async (
  dispatch: DispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => ActionsType
) => {
  dispatch(actions.toggleFollowingProgress(true, userId))
  let response = await apiMethod(userId)
  response.resultCode === 0 && dispatch(actionCreator(userId))
  dispatch(actions.toggleFollowingProgress(false, userId))
}

export const followUser = (id: number): ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(
      dispatch, 
      id, 
      usersAPI.followUser.bind(usersAPI), 
      actions.follow
    )
  }
}

export const unfollowUser = (id: number): ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(
      dispatch,
      id,
      usersAPI.unfollowUser.bind(usersAPI),
      actions.unfollow
    )
  }
}

export default usersReducer

export type InitialStateType = typeof initialState
type ActionsType = InfernActionsTypes<typeof actions>  
type DispatchType = Dispatch<ActionsType>
type ThunkType = BaseThunkType<ActionsType>
