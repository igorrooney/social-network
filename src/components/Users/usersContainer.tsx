import React, { Component, ComponentType } from 'react';
import { connect } from 'react-redux';
import Users from './users';
import Spinner from '../Spinner';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { AppStateType } from '../../modules/redux-store';
import { UsersInitialStateType } from 'modules/users/users.reducer'
import {
  followUser,
  unfollowUser,
  requestUsers,
  actions
} from 'modules/users/users.actions'
// Selectors
import { 
  selectUsers,
  selectCurrentPage,
  selectTotalCount,
  selectPageSize,
  selectIsFetching,
  selectFollowingInProgress,
  selectPortion,
} from 'modules/users/users.selectors'

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
} & UsersInitialStateType

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
    users: selectUsers(state),
    currentPage: selectCurrentPage(state),
    totalCount: selectTotalCount(state),
    pageSize: selectPageSize(state),
    isFetching: selectIsFetching(state),
    followingInProgress: selectFollowingInProgress(state),
    portion: selectPortion(state),
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
)(UsersContainer) as ComponentType