import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getProfile } from '../../redux/users-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
const mapStateToProps = state => {
  return { profile: state.usersPage.profile, authUserId: state.auth.userId };
};

export default connect(
  mapStateToProps,
  { getProfile }
)(withRouter(ProfileContainer));
