import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logOut } from '../../redux/auth-reducer';

class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    error: state.app.globalError
  };
};

export default connect(
  mapStateToProps,
  { logOut }
)(HeaderContainer);
