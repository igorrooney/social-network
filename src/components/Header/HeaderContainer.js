import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthMeData } from '../../redux/auth-reducer';
import { usersAPI } from '../../api/social-network-API';

class HeaderContainer extends Component {
  componentDidMount() {
    usersAPI.authMe().then(data => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
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
