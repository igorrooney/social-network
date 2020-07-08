import { types } from 'constants/actionTypes'
import { usersAPI } from 'api/users-api'

export const fetchUsers = (
  currentPage: number,
  pageSize: number
) => ({
  type: types.GET_USERS.BASE,
  payload: usersAPI.getUsers(currentPage, pageSize)
})

export const fetchFollowUser = (
  userId: number
) => ({
  type: types.USERS_FOLLOW.BASE,
  payload: usersAPI.followUser(userId),
  meta: userId
})

export const fetchUnfollowUser = (
  userId: number
) => ({
  type: types.USERS_UNFOLLOW.BASE,
  payload: usersAPI.unfollowUser(userId),
  meta: userId
})
