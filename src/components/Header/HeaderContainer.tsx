import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logOut } from 'modules/auth/auth.actions'
import { AppStateType } from '../../modules/redux-store'
import { selectLogin, selectIsAuth } from 'modules/auth/auth.selectors'



class HeaderContainer extends Component<HeaderContainerPropsType> {
  render() {
    return <Header {...this.props} />
  }
}

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchToProps

type MapStatePropsType = {
  login: string | null
  isAuth: boolean
}

type MapDispatchToProps = {
  logOut: () => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    login: selectLogin(state),
    isAuth: selectIsAuth(state)
  }
}



export default connect(
  mapStateToProps,
  { logOut }
)(HeaderContainer)
