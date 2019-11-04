import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  getProfile,
  getStatus,
  setNewStatus,
  updateProfileInfo,
  setEditMode,
  uploadPhoto
} from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getEditMode, getIsLoading, getIsLoadingProfile } from '../../redux/selectors';

class ProfileContainer extends Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.id;
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

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  isOwner = () => {
    if (this.props.id === this.props.profile.userId) {
      return true;
    }
    return false;
  };

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        isOwner={this.isOwner}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    id: state.auth.userId,
    editMode: getEditMode(state),
    isLoading: getIsLoadingProfile(state)
  };
};

export default compose(
  connect(
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
)(ProfileContainer);
