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
import * as axios from 'axios';
import Spinner from '../Spinner';

class UsersContainer extends Component {
  componentDidMount() {
    this.props.setIsLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setIsLoading(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCountPages(response.data.totalCount);
      });
  }

  onSetCurrentPage = page => {
    this.props.setCurrentPage(page);
    this.props.setIsLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setIsLoading(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCountPages(response.data.totalCount);
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
//  dispatch(setTotalCountPagesActionCreator(pages)),     setCurrentPage: page
// => dispatch(setCurrentPageActionCreator(page)),     setIsLoading: isLoading
// => dispatch(setIsLoadingActionCreator(isLoading))   }; };

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
