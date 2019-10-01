import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const postsData = [
  {id: "1",
  img: "https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg",
  message: "Hi, how are you?",
  likeCount: "5"},
  {id: "12",
  img: "https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg",
  message: "It's my first post",
  likeCount: "1"}
];

const dialogsData = [
  {id: "1", name: "Igor"},
  {id: "2", name: "Olga",},
  {id: "3", name: "Maksym"}
];

const messagesData = [
  {id: "1", message: "Hi"},
  {id: "2", message: "How are you doing?"},
  {id: "3", message: "Hello!!!"}
];


ReactDOM.render(<App 
                  postsData={postsData}
                  dialogsData={dialogsData}
                  messagesData={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
