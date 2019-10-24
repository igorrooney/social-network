import React from 'react';
import classes from './Dialogs.module.scss';

import { Field, reduxForm, reset } from 'redux-form';
import { required, maxLength } from '../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControl';

const maxLength50 = maxLength(50);

const afterSubmit = (result, dispatch) => dispatch(reset('createMessageForm'));

let CreateMessageForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.addMessage}>
        <div>
          <Field
            name="message"
            component={Textarea}
            placeholder="Enter your message"
            validate={[required, maxLength50]}
          />
        </div>
        <div>
          <button className="btn btn-primary">Send message</button>
        </div>
      </div>
    </form>
  );
};

CreateMessageForm = reduxForm({
  form: 'createMessageForm',
  onSubmitSuccess: afterSubmit
})(CreateMessageForm);
export default CreateMessageForm;
