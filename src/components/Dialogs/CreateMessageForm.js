import React from 'react';
import classes from './Dialogs.module.scss';

import { Field, reduxForm } from 'redux-form';

let CreateMessageForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.addMessage}>
        <div>
          <Field name="message" component="textarea" />
        </div>
        <div>
          <button className="btn btn-primary">Send message</button>
        </div>
      </div>
    </form>
  );
};

CreateMessageForm = reduxForm({ form: 'createMessageForm' })(CreateMessageForm);
export default CreateMessageForm;
