import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import classes from './Header.module.scss'
import { HeaderContainerPropsType } from './HeaderContainer'

const Header: FC<HeaderContainerPropsType> = props => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <NavLink to="/profile" className={classes.headerBrand}>
          <img
            src="http://mythemestore.com/friend-finder/images/logo.png"
            alt="logo"
          />
        </NavLink>

        {props.error && <span className={classes.error}>{props.error}</span>}

        {props.isAuth ? (
          <span>
            {props.login}
            <span
              onClick={props.logOut}
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
