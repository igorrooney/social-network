import React from 'react';
import LoginForm from './loginForm';
import { Redirect } from 'react-router-dom';

const Login = props => {
  const onSubmit = ({ email, password, rememberMe, captcha }) => {
    props.login(email, password, rememberMe, captcha);
  };

  if (props.isAuth) return <Redirect to={'/profile'} />;
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} captcha={props.captcha} />
    </div>
  );
};

export default Login;
