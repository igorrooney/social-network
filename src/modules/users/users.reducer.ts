import { combineReducers } from 'redux-immer'
import typeToReducer from 'type-to-reducer'
import produce from 'immer'
// ActionTypes
import { types } from 'constants/actionTypes'
// Types
import { UserType } from 'types/types'

const initQuery = {
  term: '',
  friend: '' as string | boolean,
  page: 1,
  count: 10,
}

const initialState = {
  users: [] as Array<UserType>,
  portion: 1,
  totalCount: 0,
  query: initQuery,
  isFetching: false,
  followingInProgress: [] as Array<number>, // array of users id
}

const users = typeToReducer({
  [types.USERS_FOLLOW.BASE]: {
    SUCCESS: (draft, action) => {
      const userId = action.meta
      draft.forEach(user => {
        if (user.id === userId) {
          user.followed = true
          return
        }
      })
      return draft
    }
  },
  [types.USERS_UNFOLLOW.BASE]: {
    SUCCESS: (draft, action) => {
      const userId = action.meta
      draft.forEach(user => {
        if (user.id === userId) {
          user.followed = false
          return
        }
      })
      return draft
    }
  },
  [types.GET_USERS.BASE]: {
    SUCCESS: (draft, action) => {
      const { items } = action.payload
      return items
    }
  },
}, initialState.users)

const query = typeToReducer({
  [types.CHANGE_USERS_QUERY]: (draft, action) => {
    const nextQuery = action.payload
    return { ...draft, ...nextQuery}
  },
  [types.RESET_USERS_QUERY]: (draft, action) => {
    return initialState.query
  }
}, initialState.query)

const totalCount = typeToReducer({
  [types.GET_USERS.BASE]: {
    SUCCESS: (draft, action) => {
      const { totalCount } = action.payload
      return totalCount
    }
  }
}, initialState.totalCount)

/* const currentPage = typeToReducer({
  [types.USERS_SET_CURRENT_PAGE]: (draft, action) => {
    const page = action.payload
    return page
  }
}, initialState.currentPage) */

const portion = typeToReducer({
  [types.USERS_SET_PORTION]: (draft, action) => {
    const portion = action.payload
    return portion
  }
}, initialState.portion)

const isFetching = typeToReducer({
  [types.GET_USERS.BASE]: {
    REQUEST: () => true,
    SUCCESS: () => false,
    FAILURE: () => false,
  },
}, initialState.isFetching)

const followingInProgress = typeToReducer({
  [types.USERS_FOLLOW.BASE]: {
    REQUEST: (draft, action) => {
      const userId = action.meta
      return [...draft, userId]
    },
    SUCCESS: (draft, action) => {
      const userId = action.meta
      const nextDraft = draft.filter(id => id !== userId)
      return nextDraft
    }
  },
  [types.USERS_UNFOLLOW.BASE]: {
    REQUEST: (draft, action) => {
      const userId = action.meta
      return [...draft, userId]
    },
    SUCCESS: (draft, action) => {
      const userId = action.meta
      const nextDraft = draft.filter(id => id !== userId)
      return nextDraft
    }
  },
}, initialState.followingInProgress)

export type UsersInitialStateType = typeof initialState
export type QueryType = {
  term?: string,
  friend?: string | boolean,
  page?: number,
  count?: number
}

export default combineReducers(produce, {
  users,
  totalCount,
  portion,
  isFetching,
  followingInProgress,
  query,
})


