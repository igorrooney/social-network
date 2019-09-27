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
        <Post />
      </div>
      
  </div>
  );
}

export default MyPosts;