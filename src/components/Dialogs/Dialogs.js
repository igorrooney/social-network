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

  const dialogsData = [
    {id: "1", name: "Igor"},
    {id: "2", name: "Olga",},
    {id: "3", name: "Maksym"}
  ];

  const messagesData = [
    {id: "1", message: "Hi"},
    {id: "2", message: "How are you doing?"},
    {id: "3", message: "Hello!!!"}
  ];

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsData.map((item) => {
          return <DialogItem key={item.id} name={item.name} id={item.id} />
        })}       
      </div>
      <div className={classes.messages}>
        {messagesData.map((item) => {
          return <Message key={item.id} message={item.message} id={item.id}/>
        })}
      </div>
    </div>
  );
}

export default Dialogs;