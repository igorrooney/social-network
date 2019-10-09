import React from 'react';

import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../storeContext';

const MyPostsContainer = () => {


  return <StoreContext.Consumer>
  {
    store => {

      let state = store.getState();

      const addPostMessage = () => {
        store.dispatch(addPostActionCreator());
      }
    
      const updatePostMessage = (text) => {
        store.dispatch(updatePostTextActionCreator(text));
      }

    return <MyPosts
      updatePostText={updatePostMessage}
      addPost={addPostMessage}
      postsData={state.profilePage.posts}
      newTextPost={state.profilePage.newTextPost}/>
    }
  }
  </StoreContext.Consumer>
}

export default MyPostsContainer;