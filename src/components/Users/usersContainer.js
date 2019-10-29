import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './users';
import {
  follow,
  unfollow,
  setUsers,
  setTotalCountPages,
  setCurrentPage,
  setIsLoading,
  requestUsers,
  followUser,
  unfollowUser
} from '../../redux/users-reducer';

import {
  getUsers,
  getCurrentPage,
  getTotalCount,
  getPageSize,
  getIsLoading,
  getIsFetching,
  getFollowingInProgress
} from '../../redux/selectors';

import Spinner from '../Spinner';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onSetCurrentPage = page => {
    this.props.getUsers(page, this.props.pageSize);
  };

  render() {
    const users = (
      <Users
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        currentPage={this.props.currentPage}
        onSetCurrentPage={this.onSetCurrentPage}
        isFetching={this.props.isFetching}
        setIsFetching={this.props.setIsFetching}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
        followingInProgress={this.props.followingInProgress}
      />
    );

    return this.props.isLoading ? <Spinner /> : users;
  }
}

const mapStateToProps = state => {
  return {
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    totalCount: getTotalCount(state),
    pageSize: getPageSize(state),
    isLoading: getIsLoading(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};

// const mapDispatchToProps = dispatch => {   return {     follow: userId =>
// dispatch(followActionCreator(userId)),     unfollow: userId =>
// dispatch(unFollowActionCreator(userId)),     setUsers: users =>
// dispatch(setUsersActionCreator(users)),     setTotalCountPages: pages =>
// dispatch(setTotalCountPagesActionCreator(pages)),     setCurrentPage: page =>
// dispatch(setCurrentPageActionCreator(page)),     setIsLoading: isLoading =>
// dispatch(setIsLoadingActionCreator(isLoading))   }; }; export default
// connect(mapStateToProps, {   follow,   unfollow,   setUsers,
// setTotalCountPages,   setCurrentPage,   setIsLoading,   setIsFetching,
// getUsers,   followUser,   unfollowUser })(UsersContainer);

export default compose(
  connect(
    mapStateToProps,
    {
      follow,
      unfollow,
      setUsers,
      setTotalCountPages,
      setCurrentPage,
      setIsLoading,
      getUsers: requestUsers,
      followUser,
      unfollowUser
    }
  ),
  withAuthRedirect
)(UsersContainer);
