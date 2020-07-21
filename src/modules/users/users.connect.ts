import { QueryType } from './users.reducer';
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
// Selectors
import * as usersSelectors from './users.selectors'
// Actions
import * as usersActions from './users.actions'

const selectors = createSelector(
  (state: any) => state,
  state => ({
    users: usersSelectors.selectUsers(state),
    portion: usersSelectors.selectPortion(state),
    totalCount: usersSelectors.selectTotalCount(state),
    count: usersSelectors.selectCount(state),
    page: usersSelectors.selectPage(state),
    isFetching: usersSelectors.selectIsFetching(state),
    followingInProgress: usersSelectors.selectFollowingInProgress(state),
    query: usersSelectors.selectQuery(state),
  })
)

export const useUsersConnect = () => {
  const dispatch = useDispatch()
  const {
    users,
    portion,
    totalCount,
    count,
    page,
    isFetching,
    followingInProgress,
    query,
  } = useSelector(state => selectors(state))

  const setPortion = useCallback(
    (portion: number) => dispatch(usersActions.setPortion(portion)),
    [dispatch]
  )

  const requestUsers = useCallback(
    () => (
      dispatch(usersActions.requestUsers()
    )),
    [dispatch]
  )

  const followUser = useCallback(
    (id: number) => dispatch(usersActions.followUser(id)),
    [dispatch]
  )

  const unfollowUser = useCallback(
    (id: number) => dispatch(usersActions.unfollowUser(id)),
    [dispatch]
  )

  const changeQuery = useCallback(
    (nextQuery: QueryType) => dispatch(usersActions.changeQuery(nextQuery)),
    [dispatch]
  )

  const resetQuery = useCallback(
    () => dispatch(usersActions.resetQuery()),
    [dispatch]
  )

  return {
    //Selectors
    users,
    portion,
    totalCount,
    count,
    page,
    isFetching,
    followingInProgress,
    query,
    // Actions
    setPortion,
    requestUsers,
    followUser,
    unfollowUser,
    changeQuery,
    resetQuery,
  }
}