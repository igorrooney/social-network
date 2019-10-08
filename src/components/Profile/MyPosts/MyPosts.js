import React from 'react';

import classes from './MyPosts.module.scss';
import Post from './Post';
import {addPostActionCreator, updatePostText} from '../../../redux/profile-reducer';

const MyPosts = ({postsData, newTextPost, dispatch}) => {

  const posts = postsData.map(post => {
    return <Post
      key={post.id}
      img={post.img}
      message={post.message}
      likeCount={post.likeCount}/>
  });

  const textareaRef = React.createRef();

  const addPostMessage = () => {
    dispatch(addPostActionCreator());
  }

  const updatePostMessage = (event) => {
    dispatch(updatePostText(event.target.value));
  }

  return (
    <div className={"container " + classes.wrapper}>
      <h3>My posts</h3>
      <div className={classes.createPost}>
        <textarea onChange={updatePostMessage} ref={textareaRef} value={newTextPost}/>
        <button className="btn btn-primary" onClick={addPostMessage}>Add post</button>
      </div>
      <div className={classes.posts}>
        {posts}
      </div>

    </div>
  );
}

export default MyPosts;