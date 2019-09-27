import React from 'react';

import classes from './Post.module.scss';

const Post = ({ img, message, likeCount }) => {
  return (
      <div className={classes.item}>
        <img src={img} alt=""/>
        {message}
        <div>
          <span>likes {likeCount}</span>
        </div>
      </div>
  );
}

export default Post;