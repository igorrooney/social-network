import React, { FC } from 'react'

import classes from './Post.module.scss'

const Post: FC<Props> = ({ img, message, likeCount }) => {
  return (
    <div className={classes.item}>
      <img src={img} alt="" />
      <div className={classes.itemDetail}>
        {message}
        <div className={classes.reaction}>
          <span>likes {likeCount}</span>
        </div>
      </div>
    </div>
  )
}

type Props = {
  img: string,
  message: string,
  likeCount: number
}

export default Post
