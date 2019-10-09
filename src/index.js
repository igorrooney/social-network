import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';

const rerender = (state) => {
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>, document.getElementById('root'));
}
rerender(store.getState());

store.subscribe(() => {
  const state = store.getState();
  rerender(store.getState(state))
});
