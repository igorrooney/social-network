import React from 'react';

import {
  addMessageActionCreator,
  updateMessageActionCreator
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../storeContext';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { state: state.dialogsPage };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: () => dispatch(addMessageActionCreator()),
    updateMessage: text => dispatch(updateMessageActionCreator(text))
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
