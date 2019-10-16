import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setProfile } from '../../redux/users-reducer';
import * as axios from 'axios';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${this.props.match
          .params.userId || 2}`
      )
      .then(response => {
        this.props.setProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
const mapStateToProps = state => {
  return { profile: state.usersPage.profile };
};

export default connect(
  mapStateToProps,
  { setProfile }
)(withRouter(ProfileContainer));
