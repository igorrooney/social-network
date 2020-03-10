import React, { FC } from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';
import { ProfileType } from '../../types/types'
import { ProfileContainerPropsType } from './ProfileContainer'

type PropsType = {
  isOwner: boolean
}

const Profile: FC<ProfileContainerPropsType & PropsType> = (props) => {
  return (
    <div>
      <ProfileInfo {...props} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile
