import { PostType, ProfileType, AuthProfileType } from './../../../types/types'
import { AppStateType } from './../../../redux/redux-store'
import { addPost } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    postsData: getPostsData(state),
    newTextPost: getNewTextPost(state),
    profile: getProfileUser(state),
    isLoading: getIsLoadingProfile(state),
    authUserProfile: getAuthUserProfile(state)
  }
}

const MyPostsContainer = connect(
  mapStateToProps,
  { addPost }
)(MyPosts)

export default MyPostsContainer
