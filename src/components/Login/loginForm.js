import React from 'react';
import { Field, reduxForm } from 'redux-form';

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Login</label>
        <Field name="email" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          component="input"
          type="password"
          placeholder="password"
        />
      </div>
      <div>
        <label htmlFor="rememberMe">Remember me</label>
        <Field name="rememberMe" component="input" type="checkbox" />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

LoginForm = reduxForm({ form: 'loginForm' })(LoginForm);

export default LoginForm;
