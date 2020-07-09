import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'
// Connect
import { useAuthConnect } from 'modules/auth/auth.connect'
// Components
import LoginForm from './loginForm'
// Types
import { AuthType } from 'types/types'

const Login: FC = () => {
  const {
    // Selectors
    isAuth,
    captcha,
    // Actions
    getLogin
  } = useAuthConnect()

  const onSubmit = ({ email, password, rememberMe, captcha }: AuthType) => {
    getLogin(email, password, rememberMe, captcha)
  }

  if (isAuth) return <Redirect to={'/profile'} />
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} captcha={captcha} />
    </div>
  )
}

export default Login
