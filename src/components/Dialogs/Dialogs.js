import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Dialogs.module.scss';

const DialogItem = ({ name, id }) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={"/dialogs/" + id}>{name}</NavLink>
    </div>
  );
}

const Message = ({ message }) => {
  return (
    <div className={classes.message}>{message}</div>
  );
}

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Igor" id="1" />
        <DialogItem name="Olga" id="2" />
        <DialogItem name="Maksym" id="3" />
       
      </div>
      <div className={classes.messages}>
        <Message message="Hi"/>
        <Message message="How are you doing?"/>
        <Message message="Hello!!!"/>
      </div>
    </div>
  );
}

export default Dialogs;