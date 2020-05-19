import { ComponentType } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { actions } from 'redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { withAuthRedirect } from 'hoc/withAuthRedirect'
import { AppStateType } from 'redux/redux-store'
import { getDialogsPage } from 'redux/selectors'
import { DialogsPageType } from 'types/types'

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return { 
    dialogsPage: getDialogsPage(state), 
  }
}

const mapDispatchToProps = {
  addMessage: actions.addMessage
}

export default compose<ComponentType>(
  connect( mapStateToProps, mapDispatchToProps ),
  withAuthRedirect
)(Dialogs)

  type MapStatePropsType = {
    dialogsPage: DialogsPageType
  }
  type MapDispatchPropsType = {
    addMessage: (message: string) => void
  }

  export type PropsType = MapStatePropsType & MapDispatchPropsType