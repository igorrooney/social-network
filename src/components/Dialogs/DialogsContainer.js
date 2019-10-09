import React from 'react';

import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../storeContext';

const DialogsContainer = () => {



  return <StoreContext.Consumer>
  {
    store => {

      const state = store.getState();

      const addMessage = () => {
        store.dispatch(addMessageActionCreator());
      }
    
      const updateMessage = (text) => {
        store.dispatch(updateMessageActionCreator(text));
      }
      return <Dialogs 
        addMessage={addMessage}
        updateMessage={updateMessage}
        state={state.dialogsPage}
      />
    }

  }
  </StoreContext.Consumer>
}

export default DialogsContainer;