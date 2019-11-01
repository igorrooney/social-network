import React from 'react';
import { createField, Input } from '../../../Common/FormsControl';
import { reduxForm } from 'redux-form';

const ProfileInfoForm = ({ handleSubmit }) => {
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
        <button>Save changes</button>
      </div>
    </form>
  );
};

const ProfileInfoFormRedux = reduxForm({ form: 'profileForm' })(
  ProfileInfoForm
);

export default ProfileInfoFormRedux;
