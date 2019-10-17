import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setProfile } from '../../redux/users-reducer';
import * as axios from 'axios';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/social-network-API';

class ProfileContainer extends Component {
  componentDidMount() {
    usersAPI.getProfile(this.props.match.params.userId).then(data => {
      this.props.setProfile(data);
    });
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
  { setProfile }
)(withRouter(ProfileContainer));
