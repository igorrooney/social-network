import React from 'react';

import classes from './Post.module.scss';

const Post = () => {
  return (
      <div className={classes.item}>
        <img src="https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg" alt=""/>
        post1
        <div>
          <span>Like</span>
        </div>
      </div>
  );
}

export default Post;