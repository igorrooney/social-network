import React from 'react';

import classes from './Dialogs.module.scss';

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog + ' ' + classes.active}>
            Igor
        </div>
        <div className={classes.dialog}>
            Olga
        </div>
        <div className={classes.dialog}>
          Maksym
        </div>        
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi!</div>
        <div className={classes.message}>How are you doing?</div>
        <div className={classes.message}>Hello!!!</div>
      </div>
    </div>
  );
}

export default Dialogs;