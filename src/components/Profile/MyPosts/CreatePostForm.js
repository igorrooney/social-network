import React from 'react';
import classes from './MyPosts.module.scss';
import userPhoto from '../../../assets/images/user.jpg';
import { Field, reduxForm } from 'redux-form';

let CreatePostForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-7 col-sm-7">
          <div className={classes.formGroup}>
            <img
              src={props.profile.photos.small || userPhoto}
              alt=""
              className={classes.profilePhotoMd}
            />
            <div>
              <Field
                className={classes.formControl + ' form-control'}
                name="post"
                component="textarea"
              />
            </div>
          </div>
        </div>
        <div className="col-md-5 col-sm-5">
          <div className={classes.tools}>
            <button className="btn btn-primary pull-right">Add post</button>
          </div>
        </div>
      </div>
    </form>
  );
};

CreatePostForm = reduxForm({ form: 'post' })(CreatePostForm);
export default CreatePostForm;
