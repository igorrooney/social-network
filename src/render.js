import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updatePostText, addMessage, updateMessageText } from './redux/state';

export const render = (state) => {
  ReactDOM.render(<App 
    state={state} 
    addPost={addPost} 
    updatePostText={updatePostText}
    addMessage={addMessage}
    updateMessageText={updateMessageText} />, document.getElementById('root'));
}

