import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
// Selectors
import * as authSelectors from './auth.selectors'
// Actions
import * as authActions from './auth.actions'
// Types
import { AuthInitialStateType } from './auth.reducer'

const selectors = createSelector(
  (state: {auth: AuthInitialStateType} | any) => state,
  state => ({
    loginData: authSelectors.selectData(state),
    userId: authSelectors.selectUserId(state),
    email: authSelectors.selectEmail(state),
    login: authSelectors.selectLogin(state),
    isAuth: authSelectors.selectIsAuth(state),
    captcha: authSelectors.selectCaptcha(state),
  })
)

export const useAuthConnect = () => {
  const dispatch = useDispatch()
  const {
    loginData,
    userId,
    email,
    login,
    isAuth,
    captcha,
  } = useSelector(state => selectors(state))

  const authMe = useCallback(
    () => dispatch(authActions.authMe()),
    [dispatch]
  )

  const getCaptcha = useCallback(
    () => dispatch(authActions.getCaptcha()),
    [dispatch]
  )

  const getLogin = useCallback(
    (email, password, rememberMe, captcha) => (
      dispatch(authActions.getLogin(email, password, rememberMe, captcha))),
    [dispatch]
  )

  const logOut = useCallback(
    () => dispatch(authActions.logOut()),
    [dispatch]
  )


  return {
    // Selectors
    loginData,
    userId,
    email,
    login,
    isAuth,
    captcha,
    // Actions
    authMe,
    getCaptcha,
    getLogin,
    logOut,
  }
}