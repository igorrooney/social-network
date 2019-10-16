import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setProfile } from '../../redux/users-reducer';
import * as axios from 'axios';
import Profile from './Profile';

class ProfileContainer extends Component {
  debugger;
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
)(ProfileContainer);
