import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Dialogs.module.scss';

const DialogItem = ({ name, id, photo }) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={"/dialogs/" + id} className={classes.user}>
        <img src={photo} alt="photo"/>
        <div className={classes.name}>
        {name}
        </div>
        
      </NavLink>
    </div>
  );
}

const Message = ({ message }) => {
  return (
    <div className={classes.message}>{message}</div>
  );
}

const Dialogs = ({ state }) => {

  const dialogItems = state.dialogs.map(item => {
    return <DialogItem key={item.id} name={item.name} id={item.id} photo={item.photo} />
  });

  const messageItems = state.messages.map(item => {
    return <Message key={item.id} message={item.message} id={item.id}/>
  });

  const addMessageRef = React.createRef();
  
  const addMessage = () => {
    const text = addMessageRef.current.value;
    alert(text);
    addMessageRef.current.value = "";
  }


  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogItems}     
      </div>
      <div className={classes.messages}>
        {messageItems}
        <div className={classes.addMessage}>
          <textarea 
            placeholder="Write your message"
            ref={addMessageRef}></textarea>
          <button 
            className="btn btn-primary" 
            onClick={ addMessage }>Send message</button>
        </div>
      </div>

    </div>
  );
}

export default Dialogs;