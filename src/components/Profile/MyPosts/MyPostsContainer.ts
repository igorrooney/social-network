import { connect } from 'react-redux'

import { PostType, ProfileType, AuthProfileType } from './../../../types/types'
import { AppStateType } from './../../../redux/redux-store'
import { addPost } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import {
  getIsLoadingProfile,
  getAuthUserProfile,
  getNewTextPost,
  getPostsData,
  getProfileUser
} from '../../../redux/selectors'

interface MapStatePropsType {
  postsData: Array<PostType>
  newTextPost: string
  profile: ProfileType | null
  isLoading: boolean
  authUserProfile: AuthProfileType
}

interface MapDispatchPropsType {
  addPost: (
    post: string,
    img: string,
    id: string
  ) => void
}

interface OwnPropsType {}

export type MyPostsContainerPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType  
 
const mapStateToProps = (state: AppStateType) => {
  return {
    postsData: getPostsData(state),
    newTextPost: getNewTextPost(state),
    profile: getProfileUser(state),
    isLoading: getIsLoadingProfile(state),
    authUserProfile: getAuthUserProfile(state)
  }
}

const mapDispatchToProps = {
  addPost
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType>(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts)