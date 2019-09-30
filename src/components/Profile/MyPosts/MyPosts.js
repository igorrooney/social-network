import React from 'react';

import classes from './MyPosts.module.scss';
import Post from './Post';



const MyPosts = () => {
  return (
    <div className={classes.wrapper}>
      <h3>My posts</h3>
      <div className={classes.createPost}>
        <textarea placeholder="Write what you wish"></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post 
          img="https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg"
          message="Hi, how are you?"
          likeCount="5" />

          <Post 
            img="https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg"
            message="It's my first post"
            likeCount="1" />
      </div>
      
  </div>
  );
}

export default MyPosts;