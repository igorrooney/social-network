import React, { FC } from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo';
import { ProfileType } from '../../types/types'
import { ProfileContainerPropsType } from './ProfileContainer'

type ProfilePropsType = {
  isOwner: boolean
}

const Profile: FC<ProfileContainerPropsType & ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo {...props} />
      <MyPostsContainer test='11' addPost={(()=>alert(1))}/>
    </div>
  );
};

export default Profile
