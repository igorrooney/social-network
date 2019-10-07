import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';


const rerender = (state) => {

  ReactDOM.render(<App state={state} 
    addPost={() => store.addPost()}
    updatePostText={(message) => store.updatePostText(message)}
    updateMessageText={(message) => store.updateMessageText(message)}
    addMessage={() => store.addMessage()}
 />, document.getElementById('root'));
}
rerender(store.getState());

store.subscribe(rerender);
