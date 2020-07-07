import React, { useEffect, useCallback } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import HeaderContainer from 'components/Header/HeaderContainer'
import NavbarContainer from 'components/Navbar/NavbarContainer'

import Spinner from 'components/Spinner'
import { withSuspense } from 'hoc/withSuspend'
// Connect
import { useAppConnect } from 'modules/app/app.connect'

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

const App = () => {
  const {
    // Selectors
    initialized,
    // Actions
    initializing,
    saveError,
  } = useAppConnect()

  const catchAllUnhandledErrors = useCallback((promiseRejectionEvent: PromiseRejectionEvent) => {
    console.log('promiseRejectionEvent :>> ', promiseRejectionEvent);
    saveError(promiseRejectionEvent.reason.message);
  }, [saveError])

  useEffect(() => {
    initializing()
    window.addEventListener('unhandledrejection', catchAllUnhandledErrors)
    return () => {
      window.removeEventListener(
        'unhandledrejection',
        catchAllUnhandledErrors
      )
    }
  }, [initializing, catchAllUnhandledErrors])
  if (!initialized) {
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

export default App
