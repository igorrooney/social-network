import { connect } from 'react-redux'
import { 
  PostType, 
  ProfileType, 
} from 'types/types'
import { AppStateType } from 'modules/redux-store'
import { actions } from 'modules/profile-reducer'
import MyPosts from './MyPosts'
import {
  getIsLoadingProfile,
  getNewTextPost,
  getPostsData,
  getProfileUser
} from 'modules/selectors'

const mapStateToProps = (state: AppStateType) => {
  return {
    postsData: getPostsData(state),
    newTextPost: getNewTextPost(state),
    profile: getProfileUser(state),
    isLoading: getIsLoadingProfile(state),
  }
}

const mapDispatchToProps = {
  addPost: actions.addPost
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts) as React.ComponentType

type MapStatePropsType = {
  postsData: Array<PostType>
  newTextPost: string
  profile: ProfileType
  isLoading: boolean
}

type MapDispatchPropsType = {
  addPost: (
    post: string,
    img: string,
    id: number
  ) => void
}

export type MyPostsContainerPropsType = MapStatePropsType & MapDispatchPropsType  