import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { addPost } from './redux/state';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App state={state} addPost={addPost} />, document.getElementById('root'));

serviceWorker.unregister();
