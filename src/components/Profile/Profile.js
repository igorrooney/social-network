import React from 'react';

import classes from './Profile.module.scss';
import MyPosts from './MyPosts';

const Profile = () => {
  return(
    <div>
      <div className={classes.wrapper}>
        <div className={classes.profileInfo}>
          <img src="https://iisy.fi/wp-content/uploads/2018/08/user-profile-male-logo.jpg" alt="logo"/>
        </div>
      </div>   
      <MyPosts />
    </div>
  );
}

export default Profile;