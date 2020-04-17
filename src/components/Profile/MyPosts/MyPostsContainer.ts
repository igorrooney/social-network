import { connect } from 'react-redux'

import { 
  PostType, 
  ProfileType, 
  AuthProfileType 
} from './../../../types/types'
import { AppStateType } from './../../../redux/redux-store'
import { actions } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import {
  getIsLoadingProfile,
  getAuthUserProfile,
  getNewTextPost,
  getPostsData,
  getProfileUser
} from '../../../redux/selectors'

type MapStatePropsType = {
  postsData: Array<PostType>
  newTextPost: string
  profile: ProfileType | null
  isLoading: boolean
  authUserProfile: AuthProfileType
}

type MapDispatchPropsType = {
  addPost: (
    post: string,
    img: string,
    id: string
  ) => void
}

type OwnPropsType = {
  addPost: (
    post: string,
    img: string,
    id: string
  ) => void 
}

export type MyPostsContainerPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType  
 
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    postsData: getPostsData(state),
    newTextPost: getNewTextPost(state),
    profile: getProfileUser(state),
    isLoading: getIsLoadingProfile(state),
    authUserProfile: getAuthUserProfile(state)
  }
}

const mapDispatchToProps = {
  addPost: actions.addPost
}

export default connect<MapStatePropsType, {}, MapDispatchPropsType, AppStateType>(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts)