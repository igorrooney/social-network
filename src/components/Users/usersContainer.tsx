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
  unfollowUser,
  setPortion
} from '../../redux/users-reducer'

import {
  getUsers,
  getCurrentPage,
  getTotalCount,
  getPageSize,
  getIsLoading,
  getIsFetching,
  getFollowingInProgress,
  getPortion
} from '../../redux/selectors';

import Spinner from '../Spinner';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';
import { InitialStateType } from '../../redux/users-reducer'

class UsersContainer extends Component<PropsType> {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onSetCurrentPage = (page: number) => {
    this.props.requestUsers(page, this.props.pageSize)
  }

  render() {
    const users = (
      // @ts-ignore
      <Users
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        currentPage={this.props.currentPage}
        onSetCurrentPage={this.onSetCurrentPage}
        isFetching={this.props.isFetching}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
        followingInProgress={this.props.followingInProgress}
        portion={this.props.portion}
        setCurrentPage={this.props.setCurrentPage}
        setPortion={this.props.setPortion}
      />
    )

    return this.props.isLoading ? <Spinner /> : users;
  }
}

type MapStatePropsType = {
  isLoading?: boolean
} & InitialStateType

type MapDispatchPropsType = {
  follow: () => void
  unfollow: () => void
  setUsers: () => void
  setTotalCountPages: () => void
  setCurrentPage: () => void
  setIsLoading: () => void
  requestUsers: (currentPage: number, pageSize: number) => void
  followUser: () => void
  unfollowUser: () => void
  setPortion: () => void
}

type OwnPropsType = {}

export type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    totalCount: getTotalCount(state),
    pageSize: getPageSize(state),
    isLoading: getIsLoading(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    portion: getPortion(state)
  }
}

export default compose(
  connect<MapStatePropsType, OwnPropsType, MapDispatchPropsType, AppStateType>(
    mapStateToProps,
    {
      follow,
      unfollow,
      setUsers,
      setTotalCountPages,
      setCurrentPage,
      setIsLoading,
      requestUsers,
      followUser,
      unfollowUser,
      setPortion
    }
  ),
  withAuthRedirect
)(UsersContainer)
