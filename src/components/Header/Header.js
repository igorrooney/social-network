import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.scss';

const Header = props => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <NavLink to="/profile" className={classes.headerBrand}>
          <img
            src="http://mythemestore.com/friend-finder/images/logo.png"
            alt="logo"
          />
        </NavLink>
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
  );
};

export default Header;
