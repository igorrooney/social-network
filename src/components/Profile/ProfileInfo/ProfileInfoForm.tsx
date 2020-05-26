import React, { FC } from 'react'
import { createField, Input } from 'Common/FormsControl'
import { reduxForm, InjectedFormProps } from 'redux-form'
import classes from './ProfileInfo.module.scss'
import { ProfileType } from 'types/types'

type CustomProps = {
  profile: ProfileType
}

const ProfileInfoForm: FC<CustomProps & InjectedFormProps<{}, CustomProps>> = 
  ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <b>Full name:</b>
        {createField('Full name', 'fullName', [], Input)}
      </div>
      <div>
        <b>About me:</b>
        {createField('About me', 'aboutMe', [], Input)}
      </div>
      <div>
        <b>Looking for a job:</b>
        {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
      </div>
      <div>
        <b>Looking for a job description:</b>
        {createField('job description', 'lookingForAJobDescription', [], Input)}
      </div>

      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map(key => (
          <div key={key}>
            <b>{key}:</b>
            <div>{createField(key, 'contacts.' + key, [], Input)}</div>
          </div>
        ))}
      </div>
      
      <div className={classes.error}>{error}</div>
      <div>
        <button>Save changes</button>
      </div>
    </form>
  )
}
const ProfileInfoFormRedux = reduxForm<{}, CustomProps>({ form: 'profileForm' })(
  ProfileInfoForm
)

export default ProfileInfoFormRedux
