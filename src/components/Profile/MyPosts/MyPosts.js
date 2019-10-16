import React from 'react';

import classes from './MyPosts.module.scss';
import Post from './Post';
import Spinner from '../../Spinner';
import userPhoto from '../../../assets/images/user.jpg';

const MyPosts = props => {
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

  const onAddPostMessage = () => {
    props.addPost();
  };

  const onUpdatePostMessage = event => {
    props.updatePostText(event.target.value);
  };

  if (!props.profile) {
    return <Spinner />;
  }

  return (
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-7">
        <div className={classes.createPost}>
          <div className="row">
            <div className="col-md-7 col-sm-7">
              <div className={classes.formGroup}>
                <img
                  src={props.profile.photos.small || userPhoto}
                  alt=""
                  className={classes.profilePhotoMd}
                />
                <textarea
                  className={classes.formControl + ' form-control'}
                  onChange={onUpdatePostMessage}
                  value={props.newTextPost}
                />
              </div>
            </div>
            <div className="col-md-5 col-sm-5">
              <div className={classes.tools}>
                <button
                  className="btn btn-primary pull-right"
                  onClick={onAddPostMessage}
                >
                  Add post
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.posts}>{posts}</div>
      </div>
      <div className="col-md-2 static"></div>
    </div>
  );
};

export default MyPosts;
