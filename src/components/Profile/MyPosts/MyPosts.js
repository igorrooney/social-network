import React from 'react';

import classes from './MyPosts.module.scss';
import Post from './Post';

const MyPosts = (props) => {
  const posts = props.postsData.map(post => {
      return <Post
        key={post.id}
        img={post.img}
        message={post.message}
        likeCount={post.likeCount}/>
    });

  const onAddPostMessage = () => {
    props.addPost();
  }

  const onUpdatePostMessage = (event) => {
    props.updatePostText(event.target.value);
  }

  return (
    <div className={"container " + classes.wrapper}>
      <h3>My posts</h3>
      <div className={classes.createPost}>
        <textarea onChange={onUpdatePostMessage} value={props.newTextPost}/>
        <button className="btn btn-primary" onClick={onAddPostMessage}>Add post</button>
      </div>
      <div className={classes.posts}>
        {posts}
      </div>

    </div>
  );
}

export default MyPosts;