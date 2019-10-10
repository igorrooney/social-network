import {
  addPostActionCreator,
  updatePostTextActionCreator
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    postsData: state.profilePage.posts,
    newTextPost: state.profilePage.newTextPost
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updatePostText: text => dispatch(updatePostTextActionCreator(text))
  };
};

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;
