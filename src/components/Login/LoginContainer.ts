import { ComponentType } from 'react'
import { getIsAuth } from '../../modules/selectors';
import { AppStateType } from '../../modules/redux-store';
import { compose } from 'redux';
import Login from './login';
import { connect } from 'react-redux';
import { getLogin } from 'modules/auth/auth.actions'
import { getCaptcha } from '../../modules/selectors';

type MapStateToPropsType = {
  isAuth: boolean
  captcha: string | null
}

type MapDispatchToPropsType = {
  getLogin: (
    email: string, 
    password: string, 
    rememberMe: boolean, 
    captcha?: any
    ) => void
}

export type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType) => {
  return { 
    isAuth: getIsAuth(state), 
    captcha: getCaptcha(state) 
  }
}


export default compose(
  connect(
    mapStateToProps,
    {getLogin}
  )
)(Login) as ComponentType
