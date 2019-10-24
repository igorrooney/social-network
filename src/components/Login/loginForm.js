import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../Common/FormsControl';
import { required, email } from '../../utils/validators/validators';

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Login</label>
        <Field
          name="email"
          component={Input}
          type="text"
          validate={[required, email]}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          component={Input}
          type="password"
          validate={[required]}
        />
      </div>
      <div>
        <label htmlFor="rememberMe">Remember me</label>
        <Field name="rememberMe" component={Input} type="checkbox" />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

LoginForm = reduxForm({ form: 'loginForm' })(LoginForm);

export default LoginForm;
