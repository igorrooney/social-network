import { AppStateType } from './redux-store'

export const getUsers = (state: AppStateType) => {
  return state.usersPage.users
}

export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage
}

export const getTotalCount = (state: AppStateType) => {
  return state.usersPage.totalCount
}

export const getPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize
}

export const getIsLoading = (state: AppStateType) => {
  return state.usersPage.isFetching
}

export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress
}
export const getIsLoadingProfile = (state: AppStateType) => {
  return state.profilePage.isLoading
}

export const getPortion = (state: AppStateType) => {
  return state.usersPage.portion
}

export const getEditMode = (state: AppStateType) => {
  return state.profilePage.editMode
}

export const getCaptcha = (state: AppStateType) => {
  return state.auth.captcha
}

export const getIsAuth = (state: AppStateType) => {
  return state.auth.isAuth
}

export const getLogin = (state: AppStateType) => {
  return state.auth.login
}

export const getAuthUserId = (state: AppStateType) => {
  return state.auth.userId
}

export const getProfileUser = (state: AppStateType) => {
  return state.profilePage.profile
}

export const getNewTextPost = (state: AppStateType) => {
  return state.profilePage.newTextPost
}

export const getStatusUser = (state: AppStateType) => {
  return state.profilePage.status
}

export const getPostsData = (state: AppStateType) => {
  return state.profilePage.posts
}

export const getDialogsPage = (state: AppStateType) => {
  return state.dialogsPage
}

export const getError = (state: AppStateType) => {
  return state.app.globalError
}

export const getFriendsBlock = (state: AppStateType) => {
  return state.friendsBlock
}
