import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';

const rerender = (state) => {

  ReactDOM.render(
    <App state={state} dispatch={store
    .dispatch
    .bind(store)}/>, document.getElementById('root'));
}
rerender(store.getState());

store.subscribe(() => {
  rerender(store.getState())
});
