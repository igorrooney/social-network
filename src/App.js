import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';

const App = ({state, dispatch}) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper container">
        <Header/>
        <Navbar state={state.friends}/>
        <div className="app-wrapper-content container-fluid">
          <Route
            path="/profile"
            render={() => <Profile state={state.profilePage} dispatch={dispatch}/>}/>

          <Route
            path="/dialogs"
            render={() => <Dialogs state={state.messagesPage} dispatch={dispatch}/>}/>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
