import React, { FC } from 'react'
import nextId from 'react-id-generator'
// Connect
import { useProfileConnect } from 'modules/profile/profile.connect'
// Components
import Post from './Post'
import CreatePostForm from './CreatePostForm'
// Styles
import classes from './MyPosts.module.scss'
import avatar from 'assets/images/user.jpg'

const MyPosts: FC = React.memo(() => {
  const {
    // Selectors
    posts: postsData,
    profile,
    isLoading,
    // Actions
    addPost,
  } = useProfileConnect()

  if (isLoading) {
    return null
  }

  const posts = postsData.map(post => {
    return (
      <Post
        key={post.id}
        img={post.img}
        message={post.message}
        likeCount={post.likeCount}
      />
    )
  })

  const onSubmitHandler = ( formData: FormDataProps ) => {
    if (!!profile) {
      const img = profile.photos.small || avatar
      const id = +nextId()
      addPost(formData.post, img, id)
    }
  }

  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-7">
        <div className={classes.createPost}></div>
        <CreatePostForm
          onSubmit={onSubmitHandler}
          photo={profile.photos.small} 
        />
        <div className={classes.posts}>
          {posts}
        </div>
      </div>
      <div className="col-md-1 static"></div>
    </div>
  )
})

type FormDataProps = {
  post: string
}

export default MyPosts
