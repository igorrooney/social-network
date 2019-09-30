import React from 'react';

import classes from './Profile.module.scss';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = () => {
  return(
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}

export default Profile;