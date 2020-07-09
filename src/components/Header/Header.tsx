import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
// Connect
import { useAppConnect } from 'modules/app/app.connect'
import { useAuthConnect } from 'modules/auth/auth.connect'
// Styles
import classes from './Header.module.scss'

const Header: FC = () => {
  const {
    globalError: error,
  } = useAppConnect()
  const {
    // Selectors
    isAuth,
    login,
    // Actions
    logOut,
  } = useAuthConnect()

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <NavLink to="/profile" className={classes.headerBrand}>
          <img
            src="http://mythemestore.com/friend-finder/images/logo.png"
            alt="logo"
          />
        </NavLink>

        {error && <span className={classes.error}>{error}</span>}

        {isAuth ? (
          <span>
            {login}
            <span
              onClick={logOut}
              style={{
                marginLeft: '10px',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              LogOut
            </span>
          </span>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  )
}

export default Header
