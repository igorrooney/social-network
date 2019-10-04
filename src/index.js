import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state, { addPost, updatePostText, addMessage, updateMessageText, subscribe} from './redux/state';
import App from './App';


const rerender = (state) => {

  ReactDOM.render(<App 
    state={state} 
    addPost={addPost} 
    updatePostText={updatePostText}
    addMessage={addMessage}
    updateMessageText={updateMessageText} />, document.getElementById('root'));
}
rerender(state);

subscribe(rerender);
