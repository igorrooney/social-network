import React from 'react';

import classes from './Profile.module.scss';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = ({ postsData}) => {
  return(
    <div>
      <ProfileInfo />
      <MyPosts postsData={postsData} />
    </div>
  );
}

export default Profile;