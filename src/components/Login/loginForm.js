import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, createField } from '../../Common/FormsControl';
import { required, email } from '../../utils/validators/validators';
import classes from './login.module.scss';

let LoginForm = props => {
  const { handleSubmit } = props;
  console.log(props.error);
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
      {props.captcha && (
        <div>
          <img src={props.captcha} />{' '}
          {createField('Symbols from image', 'captcha', [required], Input)}
        </div>
      )}
      <div className={classes.error}>{props.error}</div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

LoginForm = reduxForm({ form: 'loginForm' })(LoginForm);

export default LoginForm;
