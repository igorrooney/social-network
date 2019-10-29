import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';
import LoginContainer from './components/Login/LoginContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/usersContainer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializing } from './redux/app-reducer';
import Spinner from './components/Spinner';

class App extends Component {
  componentDidMount() {
    this.props.initializing();
  }

  render() {
    if (!this.props.initialized) {
      return <Spinner />;
    }
    return (
      <div className="app-wrapper container">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content container-fluid">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" render={() => <LoginContainer />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { initialized: state.app.initialized };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { initializing }
  )
)(App);
