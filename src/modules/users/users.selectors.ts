import { UsersInitialStateType } from './users.reducer'
import { createSelector } from 'reselect'

const usersSlice = (
  state: { usersPage: UsersInitialStateType }
) => state.usersPage

export const selectUsers = createSelector(
  usersSlice,
  usersState => usersState.users
)

export const selectPortion = createSelector(
  usersSlice,
  usersState => usersState.portion
)

export const selectTotalCount = createSelector(
  usersSlice,
  usersState => usersState.totalCount
)

export const selectIsFetching = createSelector(
  usersSlice,
  usersState => usersState.isFetching
)

export const selectFollowingInProgress = createSelector(
  usersSlice,
  usersState => usersState.followingInProgress
)

export const selectQuery = createSelector(
  usersSlice,
  usersState => usersState.query
)

export const selectPage = createSelector(
  selectQuery,
  query => query.page
)

export const selectCount = createSelector(
  selectQuery,
  query => query.count
)
