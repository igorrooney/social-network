import React, { FC } from 'react';

import classes from './MyPosts.module.scss'
import Post from './Post'
import avatar from '../../../assets/images/user.jpg'
import CreatePostForm from './CreatePostForm'
import nextId from 'react-id-generator'
import { MyPostsContainerPropsType } from './MyPostsContainer'

const MyPosts: FC<MyPostsContainerPropsType> = React.memo(({ 
  postsData, 
  isLoading, 
  authUserProfile, 
  addPost
}) => {

  const posts = postsData.map((post) => {
    return (
      <Post
        key={post.id}
        img={post.img}
        message={post.message}
        likeCount={post.likeCount}
      />
    )
  })

  if (isLoading) {
    return null
  }

  type FormDataProps = {
    post: string
  }

  const onSubmit = ( formData: FormDataProps ) => {
    if (authUserProfile) {
      const img = authUserProfile.photos.small || avatar
      const id = nextId()
      addPost(formData.post, img, id)
    }

  }

  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-7">
        <div className={classes.createPost}></div>
        <CreatePostForm
          onSubmit={onSubmit}
          authUserProfile={authUserProfile} />
        <div className={classes.posts}>{posts}</div>
      </div>
      <div className="col-md-1 static"></div>
    </div>
  )
})

export default MyPosts
