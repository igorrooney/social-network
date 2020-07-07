import React, { ComponentType, FC } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppStateType } from 'modules/redux-store'
import { selectIsAuth } from 'modules/auth/auth.selectors'

const mapStateToProps = (state: AppStateType): MapPropsType => {
  return { 
    isAuth: selectIsAuth(state)
  }
}

type MapPropsType = {
  isAuth: boolean
}

export function withAuthRedirect<WCP> (WrappedComponent: ComponentType<WCP>) {
  const RedirectComponent: FC<MapPropsType> = props => {
    const { isAuth, ...restProps} = props
      if (!isAuth) return <Redirect to="/login" />
    return <WrappedComponent {...restProps as WCP} />
  }
  return connect<MapPropsType, {}, WCP, AppStateType>(
    mapStateToProps, {})(RedirectComponent)
}
