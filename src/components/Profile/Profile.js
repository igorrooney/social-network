import React from 'react';

import classes from './Profile.module.scss';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
  return(
    <div>
      <ProfileInfo />
      <MyPosts 
        postsData={props.state.posts}
        addPost={props.addPost}
        newTextPost={props.state.newTextPost}
        updatePostText={props.updatePostText} />
    </div>
  );
}

export default Profile;