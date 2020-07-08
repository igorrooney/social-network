import { AuthInitialStateType } from './auth.reducer'
import { createSelector } from 'reselect'

const authSlice = (state: { auth: AuthInitialStateType}) => state.auth

export const selectData = createSelector(
  authSlice,
  authState => authState.data
)

export const selectUserId = createSelector(
  authSlice,
  authState => authState.data.userId || null
)

export const selectEmail = createSelector(
  authSlice,
  authState => authState.data.email || null
)

export const selectLogin = createSelector(
  authSlice,
  authState => authState.data.login || null
)

export const selectIsAuth = createSelector(
  authSlice,
  authState => authState.data.isAuth
)

export const selectCaptcha = createSelector(
  authSlice,
  authState => authState.captcha
)

