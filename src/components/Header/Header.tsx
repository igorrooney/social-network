import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
// Connect
import { useAppConnect } from 'modules/app/app.connect'
import classes from './Header.module.scss'
import { HeaderContainerPropsType } from './HeaderContainer'

const Header: FC<HeaderContainerPropsType> = ({
  isAuth,
  login,
  logOut,
}) => {
  const {
    globalError: error,
  } = useAppConnect()

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
