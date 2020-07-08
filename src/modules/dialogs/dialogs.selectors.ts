import { DialogsInitialStateType } from './dialogs.reducer'
import { createSelector } from 'reselect'

const dialogsSlice = (
  state: { dialogsPage: DialogsInitialStateType}
) => state.dialogsPage

export const selectMessages = createSelector(
  dialogsSlice,
  dialogsState => dialogsState.messages
)

export const selectDialogs = createSelector(
  dialogsSlice,
  dialogsState => dialogsState.dialogs
)
