import React, { useEffect, useCallback } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import Header from 'components/Header'
import Navbar from 'components/Navbar'
import Spinner from 'components/Spinner'
import { withSuspense } from 'hoc/withSuspend'
// Connect
import { useAppConnect } from 'modules/app/app.connect'

const Dialogs = React.lazy(() => 
  import('components/Dialogs')
)
const Profile = React.lazy(() =>
  import('components/Profile')
)
const Users = React.lazy(() =>
  import('components/Users')
)
const News = React.lazy(() => import('components/News'))
const Music = React.lazy(() => import('components/Music'))
const Settings = React.lazy(() => import('components/Settings'))
const Login = React.lazy(() =>
  import('./components/Login')
)

const SuspendedProfile = withSuspense(Profile)
const SuspendedDialogs = withSuspense(Dialogs)
const SuspendedUsers = withSuspense(Users)
const SuspendedNews = withSuspense(News)
const SuspendedMusic = withSuspense(Music)
const SuspendedSettings = withSuspense(Settings)
const SuspendedLogin = withSuspense(Login)

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
      <Header />
      <Navbar />
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
