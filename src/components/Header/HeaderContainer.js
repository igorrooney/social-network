import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthMeData } from '../../redux/auth-reducer';
import * as axios from 'axios';

class HeaderContainer extends Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          const { id, email, login } = response.data.data;
          this.props.setAuthMeData(id, email, login);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => {
  return { login: state.auth.login, isAuth: state.auth.isAuth };
};

export default connect(
  mapStateToProps,
  { setAuthMeData }
)(HeaderContainer);
