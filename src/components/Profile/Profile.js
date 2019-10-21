import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';

const Profile = props => {
  return (
    <div>
      <ProfileInfo {...props} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
