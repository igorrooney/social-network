import { connect } from 'react-redux'
import { 
  PostType, 
  ProfileType, 
} from 'types/types'
import { AppStateType } from 'modules/redux-store'
import MyPosts from './MyPosts'
import { addPost } from 'modules/profile/profile.actions'
// Selectors
import { 
  selectPosts, 
  selectNewTextPost,
  selectProfile,
  selectIsLoading,
} from 'modules/profile/profile.selectors'

const mapStateToProps = (state: AppStateType) => {
  return {
    postsData: selectPosts(state),
    newTextPost: selectNewTextPost(state),
    profile: selectProfile(state),
    isLoading: selectIsLoading(state),
  }
}

const mapDispatchToProps = {
  addPost
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