import React from 'react';

import {NavLink} from 'react-router-dom';

import classes from './Navbar.module.scss';
import Friends from '../friends';
import StoreContext from '../../storeContext';

const Navbar = (props) => {

  return (
    <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to="/profile" activeClassName={classes.active}>
        Profile
      </NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/dialogs" activeClassName={classes.active}>
        Messages
      </NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/news" activeClassName={classes.active}>
        News
      </NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/music" activeClassName={classes.active}>
        Music
      </NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/settings" activeClassName={classes.active}>
        Settings
      </NavLink>
    </div>
    <Friends friends={props.friendsBlock}/>
  </nav>
  )
}

export default Navbar;