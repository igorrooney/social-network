import React from 'react';
import LoginForm from './loginForm';

const Login = props => {
  const onSubmit = ({ email, password, rememberMe }) => {
    props.auth(email, password, rememberMe);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
