import { addPost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import {
  getIsLoadingProfile,
  getAuthUserProfile
} from '../../../redux/selectors';

const mapStateToProps = state => {
  return {
    postsData: state.profilePage.posts,
    newTextPost: state.profilePage.newTextPost,
    profile: state.profilePage.profile,
    isLoading: getIsLoadingProfile(state),
    authUserProfile: getAuthUserProfile(state)
  };
};

const MyPostsContainer = connect(
  mapStateToProps,
  { addPost }
)(MyPosts);

export default MyPostsContainer;
