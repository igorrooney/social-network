import { ProfileType } from '../../types/types'
import { getProfileUser, getAuthUserId, getIsAuth, getStatusUser } from '../../redux/selectors'
import { AppStateType } from '../../redux/redux-store'
import React, { Component, FC } from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  getProfile,
  getStatus,
  setNewStatus,
  updateProfileInfo,
  setEditMode,
  uploadPhoto
} from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { getEditMode, getIsLoadingProfile } from '../../redux/selectors'
import Profile from './Profile'



type Props = {
  match: any
  history: any
}


class ProfileContainer extends Component<ProfileContainerPropsType & Props> {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
      if (!userId) {
        return this.props.history.push('/login');
      }
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: ProfileContainerPropsType & Props, prevState: ProfileContainerPropsType & Props) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
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
  updateProfileInfo: (data: any) => void
  setEditMode: () => void
  uploadPhoto: (photo: File) => void
}

type OwnPropsType = {

}

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: getProfileUser(state),
    authUserId: getAuthUserId(state),
    isAuth: getIsAuth(state),
    status: getStatusUser(state),
    //id: state.auth.userId,
    editMode: getEditMode(state),
    isLoading: getIsLoadingProfile(state)
  }
}

export default compose(
  connect<MapStatePropsType, {}, MapDispatchPropsType, AppStateType>(
    mapStateToProps,
    {
      getProfile,
      getStatus,
      setNewStatus,
      updateProfileInfo,
      setEditMode,
      uploadPhoto
    }
  ),
  withRouter
)(ProfileContainer)
