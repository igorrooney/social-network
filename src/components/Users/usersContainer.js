import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './users';
import {
  followActionCreator,
  unFollowActionCreator,
  setUsersActionCreator,
  setTotalCountPagesActionCreator,
  setCurrentPageActionCreator
} from '../../redux/users-reducer';
import * as axios from 'axios';

class UsersContainer extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCountPages(response.data.totalCount);
      });
  }

  onSetCurrentPage = page => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCountPages(response.data.totalCount);
      });
  };

  render() {
    return (
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
  }
}

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
