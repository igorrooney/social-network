import { actions } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { AppStateType } from '../../redux/redux-store'
import { getDialogsPage } from '../../redux/selectors'
import { DialogsPageType } from '../../types/types'

type MapStatePropsType = {
  dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
  addMessage: (message: string) => void
}

type OwnPropsType = {}

export type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return { 
    dialogsPage: getDialogsPage(state), 
  }
}

const mapDispatchToProps = {
  addMessage: actions.addMessage
}

export default compose(
  connect<MapStatePropsType, OwnPropsType, MapDispatchPropsType, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
  ),withAuthRedirect)
  (Dialogs)