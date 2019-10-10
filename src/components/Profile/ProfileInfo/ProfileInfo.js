import React from 'react';

import classes from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.profileInfo}>
        <img
          src="https://iisy.fi/wp-content/uploads/2018/08/user-profile-male-logo.jpg"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
