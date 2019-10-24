import React from 'react';
import classes from './FormsControl.module.scss';

const FormControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={hasError ? classes.error : ''}>
      <div>{props.children}</div>
      {hasError && <span className={classes.errorMessage}>{meta.error}</span>}
    </div>
  );
};

export const Input = props => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const Textarea = props => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};
