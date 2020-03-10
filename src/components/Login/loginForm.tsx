import React, { FC } from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Input, createField } from '../../Common/FormsControl';
import { required, email } from '../../utils/validators/validators';
import classes from './login.module.scss';
import { AuthType } from '../../types/types';

type CustomProps = {
  captcha: string | null
  error?: string
}

let LoginForm: FC<CustomProps & InjectedFormProps<AuthType, CustomProps>> = props => {
  const { handleSubmit } = props
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
          <img src={props.captcha} alt="" />{' '}
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

export default reduxForm<AuthType, CustomProps>({ form: 'loginForm' })(LoginForm)