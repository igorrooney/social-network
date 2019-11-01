import React from 'react';

import classes from './MyPosts.module.scss';
import Post from './Post';
import Spinner from '../../Spinner';
import avatar from '../../../assets/images/user.jpg';
import CreatePostForm from './CreatePostForm';

const MyPosts = React.memo(props => {
  const posts = props.postsData.map(post => {
    return (
      <Post
        key={post.id}
        img={post.img}
        message={post.message}
        likeCount={post.likeCount}
      />
    );
  });

  if (!props.profile) {
    return <Spinner />;
  }

  const onSubmit = formData => {
    const img = props.profile.photos.small || avatar;
    props.addPost(formData.post, img);
  };

  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-7">
        <div className={classes.createPost}></div>
        <CreatePostForm {...props} onSubmit={onSubmit} />
        <div className={classes.posts}>{posts}</div>
      </div>
      <div className="col-md-1 static"></div>
    </div>
  );
});

export default MyPosts;
