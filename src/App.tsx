import React, { Component } from 'react'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import './App.css'
import HeaderContainer from 'components/Header/HeaderContainer'
import NavbarContainer from 'components/Navbar/NavbarContainer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { initializing, saveError } from 'redux/app-reducer'
import Spinner from 'components/Spinner'
import { withSuspense } from 'hoc/withSuspend'
import { AppStateType } from 'redux/redux-store'

const DialogsContainer = React.lazy(() => 
  import('components/Dialogs/DialogsContainer')
)
const ProfileContainer = React.lazy(() =>
  import('components/Profile/ProfileContainer')
)
const UsersContainer = React.lazy(() =>
  import('components/Users/usersContainer')
)
const News = React.lazy(() => import('components/News'))
const Music = React.lazy(() => import('components/Music'))
const Settings = React.lazy(() => import('components/Settings'))
const LoginContainer = React.lazy(() =>
  import('./components/Login/LoginContainer')
)

const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedUsers = withSuspense(UsersContainer)
const SuspendedNews = withSuspense(News)
const SuspendedMusic = withSuspense(Music)
const SuspendedSettings = withSuspense(Settings)
const SuspendedLogin = withSuspense(LoginContainer)

class App extends Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
    console.log(promiseRejectionEvent)
    this.props.saveError(promiseRejectionEvent.reason.message);
  }

  componentDidMount() {
    this.props.initializing()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  componentWillUnmount() {
    window.removeEventListener(
      'unhandledrejection',
      this.catchAllUnhandledErrors
    )
  }


  render() {
    if (!this.props.initialized) {
      return <Spinner />
    }
    return (
      <div className="app-wrapper container">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content container-fluid">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/profile" />} />
            <Route
              path="/profile/:userId?"
              render={() => <SuspendedProfile />}
            />
            <Route path="/dialogs" render={() => <SuspendedDialogs />} />
            <Route path="/users" render={() => <SuspendedUsers />} />
            <Route path="/news" render={() => <SuspendedNews />} />
            <Route path="/music" render={() => <SuspendedMusic />} />
            <Route path="/settings" render={() => <SuspendedSettings />} />
            <Route path="/login" render={() => <SuspendedLogin />} />
            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppStateType) => {
  return { 
    initialized: state.app.initialized 
  }
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { initializing, saveError }
  )
)(App)

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  saveError: (message: string) => void
  initializing: () => void
}
