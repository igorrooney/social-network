import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper container">
        <Header/>
        <Navbar state={props.state.friendsBlock}/>
        <div className="app-wrapper-content container-fluid">
          <Route path="/profile" render={() => <Profile store={props.store}/>}/>

          <Route
            path="/dialogs"
            render={() => <DialogsContainer store={props.store}/>}/>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
