import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    postsData: state.profilePage.posts,
    newTextPost: state.profilePage.newTextPost,
    profile: state.profilePage.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: (post, img) => dispatch(addPostActionCreator(post, img))
  };
};

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;
