import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './users';
import {
  follow,
  unfollow,
  setUsers,
  setTotalCountPages,
  setCurrentPage,
  setIsLoading
} from '../../redux/users-reducer';

import Spinner from '../Spinner';
import { usersAPI } from '../../api/social-network-API';

class UsersContainer extends Component {
  componentDidMount() {
    this.props.setIsLoading(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.setIsLoading(false);
        this.props.setUsers(data.items);
        this.props.setTotalCountPages(data.totalCount);
      });
  }

  onSetCurrentPage = page => {
    this.props.setCurrentPage(page);
    this.props.setIsLoading(true);

    usersAPI.getUsers(page, this.props.pageSize).then(data => {
      this.props.setIsLoading(false);
      this.props.setUsers(data.items);
      this.props.setTotalCountPages(data.totalCount);
    });
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
      />
    );

    return this.props.isLoading ? <Spinner /> : users;
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    isLoading: state.usersPage.isLoading
  };
};

// const mapDispatchToProps = dispatch => {   return {     follow: userId =>
// dispatch(followActionCreator(userId)),     unfollow: userId =>
// dispatch(unFollowActionCreator(userId)),     setUsers: users =>
// dispatch(setUsersActionCreator(users)),     setTotalCountPages: pages =>
// dispatch(setTotalCountPagesActionCreator(pages)),     setCurrentPage: page =>
// dispatch(setCurrentPageActionCreator(page)),     setIsLoading: isLoading =>
// dispatch(setIsLoadingActionCreator(isLoading))   }; };

export default connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setTotalCountPages,
    setCurrentPage,
    setIsLoading
  }
)(UsersContainer);
