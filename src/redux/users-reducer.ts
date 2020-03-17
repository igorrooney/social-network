import { AppStateType } from './redux-store'
import { PhotoType, UserType } from './../types/types'
import { usersAPI } from '../api/social-network-API'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

const FOLLOW = '/users/FOLLOW';
const UNFOLLOW = '/users/UNFOLLOW';
const SET_USERS = '/users/SET_USERS';
const SET_TOTAL_COUNT_PAGES = '/users/SET_TOTAL_COUNT_PAGES';
const SET_CURRENT_PAGE = '/users/SET_CURRENT_PAGE';
const SET_IS_LOADING = '/users/SET_IS_LOADING';
const TOGGLE_IS_FOLLOWING_PROGRESS = '/users/TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_PORTION = '/users/SET_PORTION';

const initialState = {
  users: [] as Array<UserType>,
  portion: 1,
  totalCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number> // array of users id
};

export type InitialStateType = typeof initialState

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
            };
          }
          return user;
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
            };
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
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }

    default:
      return state;
  }
}

type ActionsType = FollowActionType | UnfollowActionType | SetUsersActionType | SetTotalCountPagesActionType
  | SetCurrentPageActionType | SetPortionActionType | SetIsLoadingActionType | ToggleFollowingProgressActionType

type FollowActionType = {
  type: typeof FOLLOW
  userId: number
}
export const follow = (userId: number): FollowActionType => ({ type: FOLLOW, userId })

type UnfollowActionType = {
  type: typeof UNFOLLOW
  userId: number
}
export const unfollow = (userId: number): UnfollowActionType => ({ type: UNFOLLOW, userId })

type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users })

type SetTotalCountPagesActionType = {
  type: typeof SET_TOTAL_COUNT_PAGES
  pages: number
}
export const setTotalCountPages = (pages: number): SetTotalCountPagesActionType => ({
  type: SET_TOTAL_COUNT_PAGES,
  pages
})

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  page: number
}
export const setCurrentPage = (page: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, page })

type SetPortionActionType = {
  type: typeof SET_PORTION
  portion: number
}
export const setPortion = (portion: number): SetPortionActionType => ({ type: SET_PORTION, portion })

type SetIsLoadingActionType = {
  type: typeof SET_IS_LOADING
  isFetching: boolean
}
export const setIsLoading = (isFetching: boolean): SetIsLoadingActionType => ({
  type: SET_IS_LOADING,
  isFetching
})

type ToggleFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
})

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(setIsLoading(true))
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setIsLoading(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalCountPages(data.totalCount))
    dispatch(setCurrentPage(currentPage))
    //dispatch(setPortion(portion))
  }
}

export const followUser = (id: number): ThunkType => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, id))
    const data = await usersAPI.followUser(id)
    if (data.resultCode === 0) {
      dispatch(follow(id))
    }

    dispatch(toggleFollowingProgress(false, id))
  }
}

export const unfollowUser = (id: number): ThunkType => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    const data = await usersAPI.unfollowUser(id);
    if (data.resultCode === 0) {
      dispatch(unfollow(id));
    }
    dispatch(toggleFollowingProgress(false, id));
  }
}

export default usersReducer
