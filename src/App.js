import React from 'react';

import './App.css';
import Header from './components/Header';
import Navbar from './components/Nabvar';
import Profile from './components/Profile';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
