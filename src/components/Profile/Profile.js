import React from 'react';

import classes from './Profile.module.scss';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts
        postsData={props.state.posts}
        newTextPost={props.state.newTextPost}
        dispatch={props.dispatch}/>
    </div>
  );
}

export default Profile;