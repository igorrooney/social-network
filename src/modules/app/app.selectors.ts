import { AppInitialStateType } from './app.reducer'
import { createSelector } from 'reselect'

const appSlice = (state: { app: AppInitialStateType}) => state.app

export const selectInitialized = createSelector(
  appSlice,
  appState => appState.initialized
)

export const selectGlobalError = createSelector(
  appSlice,
  appState => appState.globalError
)
