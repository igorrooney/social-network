import React from 'react';

import classes from './MyPosts.module.scss';
import Post from './Post';



const MyPosts = ({ postsData }) => {

  const posts = postsData.map(post => {
    return <Post 
              key={post.id}
              img={post.img} 
              message={post.message}
              likeCount={post.likeCount}
            />
  });

  const textareaRef = React.createRef();

  const addPost = () => {
    const text = textareaRef.current.value;
    alert(text);
  }

  return (
    <div className={"container" + " " + classes.wrapper}>
      <h3>My posts</h3>
      <div className={classes.createPost}>
        <textarea placeholder="Write what you wish" ref={textareaRef}></textarea>
        <button className="btn btn-primary" onClick={ addPost }>Add post</button>
      </div>
      <div className={classes.posts}>
      {posts}
      </div>
      
  </div>
  );
}

export default MyPosts;