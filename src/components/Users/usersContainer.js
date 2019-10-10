import { connect } from 'react-redux';
import Users from './users';
import {
  followActionCreator,
  unFollowActionCreator,
  setUsersActionCreator
} from '../../redux/users-reducer';

const mapStateToProps = state => {
  return { users: state.usersPage.users };
};

const mapDispatchToProps = dispatch => {
  return {
    follow: userId => dispatch(followActionCreator(userId)),
    unfollow: userId => dispatch(unFollowActionCreator(userId)),
    setUsers: users => dispatch(setUsersActionCreator(users))
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersContainer;
