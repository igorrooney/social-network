import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
// Selectors
import * as appSelectors from './app.selectors'
// Actions
import * as appActions from './app.actions'
// Types
import { AppInitialStateType } from './app.reducer'

const selectors = createSelector(
  (state: {app: AppInitialStateType} | any) => state,
  state => ({
    initialized: appSelectors.selectInitialized(state),
    globalError: appSelectors.selectGlobalError(state),
  })
)

export const useAppConnect = () => {
  const dispatch = useDispatch()
  const {
    initialized,
    globalError,
  } = useSelector(state => selectors(state))

  const initializing = useCallback(
    () => dispatch(appActions.initializing()),
    [dispatch]
  )

  const saveError = useCallback(
    error => dispatch(appActions.saveError(error)),
    [dispatch]
  )

  return {
    // Selectors
    initialized,
    globalError,
    // Actions
    initializing,
    saveError,
  }
}
