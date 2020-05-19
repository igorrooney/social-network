import React, { FC } from 'react'
import { Field, reduxForm, reset, InjectedFormProps } from 'redux-form'

import { required, maxLength } from 'utils/validators/validators'
import { Textarea } from 'Common/FormsControl'
import { NewMessageFormType } from './Dialogs'
import classes from './Dialogs.module.scss'

const maxLength50 = maxLength(50)

const afterSubmit = (result: any, dispatch: any) => dispatch(reset('createMessageForm'))

let CreateMessageForm: FC<InjectedFormProps<NewMessageFormType, {}> & {}> = ({ handleSubmit }) => {
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
  )
}

export default reduxForm<NewMessageFormType>({
  form: 'createMessageForm',
  onSubmitSuccess: afterSubmit
})(CreateMessageForm)
