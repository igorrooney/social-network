import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';

const App = () => {
  return (
    <div className="app-wrapper container">
      <Header/>
      <NavbarContainer />
      <div className="app-wrapper-content container-fluid">
        <Route path="/profile" render={() => <Profile />}/>
        <Route path="/dialogs" render={() => <DialogsContainer />}/>
        <Route path="/news" component={News}/>
        <Route path="/music" component={Music}/>
        <Route path="/settings" component={Settings}/>
      </div>
    </div>
  );
}

export default App;
