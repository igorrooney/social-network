import React from 'react';

import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = () => {


//   return <StoreContext.Consumer>
//   {
//     store => {

//       let state = store.getState();

//       const addPostMessage = () => {
//         store.dispatch(addPostActionCreator());
//       }
    
//       const updatePostMessage = (text) => {
//         store.dispatch(updatePostTextActionCreator(text));
//       }

//     return <MyPosts
//       updatePostText={updatePostMessage}
//       addPost={addPostMessage}
//       postsData={state.profilePage.posts}
//       newTextPost={state.profilePage.newTextPost}/>
//     }
//   }
//   </StoreContext.Consumer>
// }

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.posts,
    newTextPost: state.profilePage.newTextPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updatePostText: text => dispatch(updatePostTextActionCreator(text))
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;