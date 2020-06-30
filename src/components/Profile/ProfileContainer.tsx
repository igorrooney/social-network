import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { ProfileType } from '../../types/types'
import { AppStateType } from '../../modules/redux-store'
import { 
  getProfileUser, 
  getAuthUserId, 
  getIsAuth, 
  getStatusUser,
  getEditMode,
  getIsLoadingProfile,
} from '../../modules/selectors'
import {
  getProfile,
  getStatus,
  setNewStatus,
  updateProfileInfo,
  actions,
  uploadPhoto,
} from '../../modules/profile-reducer'

import Profile from './Profile'

type PathParamsType = {
  userId: string
}

class ProfileContainer extends Component<ProfileContainerPropsType> {
  refreshProfile() {
    let userId: number | null = +this.props.match.params.userId
    if (!userId) {
      userId = this.props.authUserId
      if (!userId) {
        return this.props.history.push('/login')
      }
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: ProfileContainerPropsType, prevState: ProfileContainerPropsType) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  isOwner = () => {
    if (this.props.profile) {
      if (this.props.authUserId === this.props.profile.userId) {
        return true
      }
    }
    return false
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={this.isOwner()}
      />
    )
  }
}

type MapStatePropsType = {
  profile: ProfileType | null
  authUserId: number | null
  isAuth: boolean
  status: string
  editMode: boolean
  isLoading: boolean
}

type MapDispatchPropsType = {
  getProfile: (id: number) => void
  getStatus: (id: number) => void
  setNewStatus: (newStatus: string) => void
  updateProfileInfo: (data: ProfileType) => void
  setEditMode: (mode: boolean) => void
  uploadPhoto: (photo: File) => void
}

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: getProfileUser(state),
    authUserId: getAuthUserId(state),
    isAuth: getIsAuth(state),
    status: getStatusUser(state),
    editMode: getEditMode(state),
    isLoading: getIsLoadingProfile(state)
  }
}

const mapDispatchToProps = {
  getProfile,
  getStatus,
  setNewStatus,
  updateProfileInfo,
  setEditMode: actions.setEditMode,
  uploadPhoto
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(ProfileContainer) as React.ComponentType