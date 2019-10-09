import React from 'react';

import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';




const DialogsContainer = (props) => {

  const state = props.store.getState();

  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  const updateMessage = (text) => {
    props.store.dispatch(updateMessageActionCreator(text));
  }

  return <Dialogs 
    addMessage={addMessage}
    updateMessage={updateMessage}
    state={state.dialogsPage}
  />
}

export default DialogsContainer;