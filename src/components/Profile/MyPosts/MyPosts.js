import React from 'react';

import classes from './MyPosts.module.scss';
import Post from './Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
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