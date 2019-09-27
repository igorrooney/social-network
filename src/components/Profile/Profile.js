import React from 'react';

import classes from './Profile.module.scss';
import MyPosts from './MyPosts';

const Profile = () => {
  return(
    <div className={classes.content}>
      <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
      </div>
      <div>
        ava+description
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;