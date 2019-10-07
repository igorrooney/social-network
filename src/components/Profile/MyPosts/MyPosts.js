import React from 'react';

import classes from './MyPosts.module.scss';
import Post from './Post';



const MyPosts = ({ postsData, addPost, newTextPost, updatePostText }) => {

  const posts = postsData.map(post => {
    return <Post 
              key={post.id}
              img={post.img} 
              message={post.message}
              likeCount={post.likeCount}
            />
  });

  const textareaRef = React.createRef();

  const createPost = () => {
    //const text = textareaRef.current.value;
    addPost();
  }

  const updatePostMessage = (event) => {
    debugger;
    updatePostText(event.target.value);
  }

  return (
    <div className={"container" + " " + classes.wrapper}>
      <h3>My posts</h3>
      <div className={classes.createPost}>
        <textarea onChange={(text) => updatePostMessage(text) } ref={textareaRef} value={newTextPost} />
        <button className="btn btn-primary" onClick={ createPost }>Add post</button>
      </div>
      <div className={classes.posts}>
      {posts}
      </div>
      
  </div>
  );
}

export default MyPosts;