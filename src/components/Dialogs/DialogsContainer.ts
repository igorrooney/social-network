import { ComponentType } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { addMessage } from 'modules/dialogs/dialogs.actions'
import Dialogs from './Dialogs'
import { withAuthRedirect } from 'hoc/withAuthRedirect'
import { AppStateType } from 'modules/redux-store'
// Selectors
import { selectDialogs, selectMessages } from 'modules/dialogs/dialogs.selectors'
// Types
import { DialogType, MessageType } from 'types/types'

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return { 
    dialogs: selectDialogs(state),
    messages: selectMessages(state),
  }
}

const mapDispatchToProps = {
  addMessage
}

export default compose<ComponentType>(
  connect( mapStateToProps, mapDispatchToProps ),
  withAuthRedirect
)(Dialogs)

  type MapStatePropsType = {
    dialogs:  Array<DialogType>,
    messages: Array<MessageType>
  }
  type MapDispatchPropsType = {
    addMessage: (message: string) => void
  }

  export type PropsType = MapStatePropsType & MapDispatchPropsType