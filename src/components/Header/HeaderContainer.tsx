import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logOut } from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/redux-store'
import { getLogin, getIsAuth, getError } from '../../redux/selectors'



class HeaderContainer extends Component<HeaderContainerPropsType> {
  render() {
    return <Header {...this.props} />
  }
}

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchToProps

type MapStatePropsType = {
  login: string | null
  isAuth: boolean
  error: string
}

type MapDispatchToProps = {
  logOut: () => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    login: getLogin(state),
    isAuth: getIsAuth(state),
    error: getError(state)
  }
}



export default connect<MapStatePropsType, {}, MapDispatchToProps, AppStateType>(
  mapStateToProps,
  { logOut }
)(HeaderContainer)
