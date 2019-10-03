import React from 'react';

import classes from './Profile.module.scss';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = ({ state }) => {
  return(
    <div>
      <ProfileInfo />
      <MyPosts postsData={state.posts} />
    </div>
  );
}

export default Profile;