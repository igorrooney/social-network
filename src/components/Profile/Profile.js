import React from 'react';

import classes from './Profile.module.scss';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer store={props.store}/>
    </div>
  );
}

export default Profile;