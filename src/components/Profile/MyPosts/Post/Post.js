import React from 'react';

import classes from './Post.module.scss';

const Post = ({ img, message, likeCount }) => {
  return (
      <div className={classes.item}>
        <img src={img} alt=""/>
        <div className={classes.itemDetail}>
          {message}
          <div className={classes.reaction}>
            <span>likes {likeCount}</span>
          </div>
        </div>
      </div>
  );
}

export default Post;