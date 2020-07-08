import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
// Selectors
import * as dialogsSelectors from './dialogs.selectors'
// Actions
import * as dialogsActions from './dialogs.actions'

const selectors = createSelector(
  (state: any) => state,
  state => ({
    messages: dialogsSelectors.selectMessages(state),
    dialogs: dialogsSelectors.selectDialogs(state),
  })
)

export const useDialogsConnect = () => {
  const dispatch = useDispatch()
  const {
    messages,
    dialogs,
  } = useSelector(state => selectors(state))

  const addMessage = useCallback(
    (message: string) => dispatch(dialogsActions.addMessage(message)),
    [dispatch]
  )

  return {
    // Selectors
    messages,
    dialogs,
    // Actions
    addMessage,
  }
}