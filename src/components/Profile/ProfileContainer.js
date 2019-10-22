import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  getProfile,
  getStatus,
  setNewStatus
} from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId);
    this.props.getStatus(this.props.match.params.userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
  };
};

export default compose(
  connect(
    mapStateToProps,
    { getProfile, getStatus, setNewStatus }
  ),
  withRouter
)(ProfileContainer);
