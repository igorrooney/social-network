import { addPost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    postsData: state.profilePage.posts,
    newTextPost: state.profilePage.newTextPost,
    profile: state.profilePage.profile
  };
};

const MyPostsContainer = connect(
  mapStateToProps,
  { addPost }
)(MyPosts);

export default MyPostsContainer;
