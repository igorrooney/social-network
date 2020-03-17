import React, { FC } from 'react'

import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo'
import { ProfileContainerPropsType } from './ProfileContainer'

type ProfilePropsType = {
  isOwner: boolean
}

const Profile: FC<ProfileContainerPropsType & ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo {...props} />
      <MyPostsContainer addPost={() => console.log()} />
    </div>
  )
}

export default Profile
