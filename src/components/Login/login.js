import React from 'react';
import LoginForm from './loginForm';
import { Redirect } from 'react-router-dom';

const Login = props => {
  const onSubmit = ({ email, password, rememberMe }) => {
    props.login(email, password, rememberMe);
  };

  if (props.isAuth) return <Redirect to={'/profile'} />;

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
