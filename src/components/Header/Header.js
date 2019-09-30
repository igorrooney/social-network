import React from 'react';

import classes from './Header.module.scss';

const Header = () => {
  return(
    <header className={classes.header}>
      <div className={classes.container}>
        <a  className={classes.headerBrand} href="#">
          <img src="http://mythemestore.com/friend-finder/images/logo.png" alt="logo"/>  
        </a>  
      </div>

    
    </header>
  );
}

export default Header;