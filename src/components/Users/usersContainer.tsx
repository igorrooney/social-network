import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './users';
import {
  followUser,
  unfollowUser,
  requestUsers,
  actions
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
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
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
      <Users
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        currentPage={this.props.currentPage}
        onSetCurrentPage={this.onSetCurrentPage}
        isFetching={this.props.isFetching}
        followingInProgress={this.props.followingInProgress}
        portion={this.props.portion}
        setCurrentPage={this.props.setCurrentPage}
        setPortion={this.props.setPortion}
        requestUsers={this.props.requestUsers}
      />
    )

    return this.props.isLoading ? <Spinner /> : users
  }
}

type MapStatePropsType = {
  isLoading?: boolean
} & InitialStateType

type MapDispatchPropsType = {
  requestUsers: (currentPage: number, pageSize: number) => void
  followUser: (id: number) => void
  unfollowUser: (id: number) => void
  setPortion: (portion: number) => void
  setCurrentPage: (page: number) => void
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

  const mapDispatchToProps = {
    followUser,
    unfollowUser,
    requestUsers,
    setCurrentPage: actions.setCurrentPage,
    setPortion: actions.setPortion
  }

export default compose(
  connect<MapStatePropsType, OwnPropsType, MapDispatchPropsType, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
  ),
  withAuthRedirect
)(UsersContainer)