import React, { FC } from 'react';
import LoginForm from './loginForm';
import { Redirect } from 'react-router-dom';
import { LoginPropsType } from './LoginContainer';
import { AuthType } from '../../types/types';

const Login: FC<LoginPropsType> = ({login, isAuth, captcha}) => {
  const onSubmit = ({ email, password, rememberMe, captcha }: AuthType) => {
    console.log('login')
    login(email, password, rememberMe, captcha)
  }
  console.log(isAuth, '<< isAuth')
  if (isAuth) return <Redirect to={'/profile'} />
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} captcha={captcha} />
    </div>
  )
}

export default Login
