import { getIsAuth } from './../../redux/selectors';
import { AppStateType } from './../../redux/redux-store';
import { compose } from 'redux';
import Login from './login';
import { connect, MapStateToProps } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { getCaptcha } from '../../redux/selectors';

type MapStateToPropsType = {
  isAuth: boolean
  captcha: string | null
}

type MapDispatchToPropsType = {
  login: (
    email: string, 
    password: string, 
    rememberMe: boolean, 
    captcha?: string | null
    ) => void
}

export type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return { 
    isAuth: getIsAuth(state), 
    captcha: getCaptcha(state) 
  }
}

export default compose(
  connect<MapStateToPropsType, {}, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    { login }
  )
)(Login);
