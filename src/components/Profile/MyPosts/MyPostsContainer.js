import React from 'react';

import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  let state = props.store.getState();

  const addPostMessage = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const updatePostMessage = (text) => {
    props.store.dispatch(updatePostTextActionCreator(text));
  }

  return <MyPosts
    updatePostText={updatePostMessage}
    addPost={addPostMessage}
    postsData={state.profilePage.posts}
    newTextPost={state.profilePage.newTextPost}/>
}

export default MyPostsContainer;