import { connect } from 'react-redux';
import Users from './users';
import {
  followActionCreator,
  unFollowActionCreator,
  setUsersActionCreator,
  setTotalCountPagesActionCreator,
  setCurrentPageActionCreator
} from '../../redux/users-reducer';

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize
  };
};

const mapDispatchToProps = dispatch => {
  return {
    follow: userId => dispatch(followActionCreator(userId)),
    unfollow: userId => dispatch(unFollowActionCreator(userId)),
    setUsers: users => dispatch(setUsersActionCreator(users)),
    setTotalCountPages: pages =>
      dispatch(setTotalCountPagesActionCreator(pages)),
    setCurrentPage: page => dispatch(setCurrentPageActionCreator(page))
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersContainer;
