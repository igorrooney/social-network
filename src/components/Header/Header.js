import React from 'react';

import classes from './Header.module.scss';

const Header = () => {
  return(
    <header className={classes.header}>
      <img src="https://image.freepik.com/free-vector/gradient-logo-template-with-abstract-shape_23-2148204210.jpg" alt="logo"/>
    </header>
  );
}

export default Header;