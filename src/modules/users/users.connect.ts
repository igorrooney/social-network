import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
// Selectors
import * as usersSelectors from './users.selectors'
// Actions
import * as usersActions from './users.actions'
// Types

const selectors = createSelector(
  (state: any) => state,
  state => ({
    users: usersSelectors.selectUsers(state),
    portion: usersSelectors.selectPortion(state),
    totalCount: usersSelectors.selectTotalCount(state),
    pageSize: usersSelectors.selectPageSize(state),
    currentPage: usersSelectors.selectCurrentPage(state),
    isFetching: usersSelectors.selectIsFetching(state),
    followingInProgress: usersSelectors.selectFollowingInProgress(state),
  })
)

export const useUsersConnect = () => {
  const dispatch = useDispatch()
  const {
    users,
    portion,
    totalCount,
    pageSize,
    currentPage,
    isFetching,
    followingInProgress,
  } = useSelector(state => selectors(state))

  const setCurrentPage = useCallback(
    (page: number) => dispatch(usersActions.setCurrentPage(page)),
    [dispatch]
  )

  const setPortion = useCallback(
    (portion: number) => dispatch(usersActions.setPortion(portion)),
    [dispatch]
  )

  const requestUsers = useCallback(
    (currentPage: number, pageSize: number) => (
      dispatch(usersActions.requestUsers(currentPage, pageSize)
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

  return {
    //Selectors
    users,
    portion,
    totalCount,
    pageSize,
    currentPage,
    isFetching,
    followingInProgress,
    // Actions
    setCurrentPage,
    setPortion,
    requestUsers,
    followUser,
    unfollowUser,
  }
}