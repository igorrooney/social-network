import React from 'react';
import classes from './MyPosts.module.scss';
import userPhoto from '../../../assets/images/user.jpg';
import { Field, reduxForm, reset, InjectedFormProps } from 'redux-form';
import { required, maxLength } from '../../../utils/validators/validators';
import { Textarea } from '../../../Common/FormsControl';

const maxLength15 = maxLength(15);

const afterSubmit = (result: any, dispatch: any) => dispatch(
  reset('createPostForm'))

type IUser = {
  post: string
  photo: string
}

type IProps = {
  photo: string,
  onSubmit: (data: IUser) => void
}

let CreatePostForm: React.FC<IProps & InjectedFormProps<IUser, IProps>> = (props: any) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-7 col-sm-7">
          <div className={classes.formGroup}>
            <img
              src={props.photo || userPhoto}
              alt=""
              className={classes.profilePhotoMd}
            />
            <div>
              <Field
                className={classes.formControl + ' form-control'}
                name="post"
                component={Textarea}
                placeholder="Write your post"
                validate={[required, maxLength15]}
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
  )
}

export default reduxForm<IUser, IProps>({
  form: 'createPostForm',
  onSubmitSuccess: afterSubmit
})(CreatePostForm)