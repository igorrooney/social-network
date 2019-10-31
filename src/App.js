import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializing } from './redux/app-reducer';
import Spinner from './components/Spinner';
import { withSuspense } from './hoc/withSuspend';

const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer')
);

const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer')
);

const UsersContainer = React.lazy(() =>
  import('./components/Users/usersContainer')
);

const News = React.lazy(() => import('./components/News'));

const Music = React.lazy(() => import('./components/Music'));

const Settings = React.lazy(() => import('./components/Settings'));

const LoginContainer = React.lazy(() =>
  import('./components/Login/LoginContainer')
);

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
          <Route
            path="/profile/:userId?"
            render={withSuspense(ProfileContainer)}
          />
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route path="/users" render={withSuspense(UsersContainer)} />
          <Route path="/news" render={withSuspense(News)} />
          <Route path="/music" render={withSuspense(Music)} />
          <Route path="/settings" render={withSuspense(Settings)} />
          <Route path="/login" render={withSuspense(LoginContainer)} />
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
