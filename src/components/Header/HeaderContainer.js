import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authMe, logOut } from '../../redux/auth-reducer';

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.authMe();
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
  { authMe, logOut }
)(HeaderContainer);
