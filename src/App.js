import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';

const App = ({ postsData, dialogsData, messagesData }) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
        <Route path="/profile"  render={() => <Profile postsData={postsData}/>} />  
        <Route path="/dialogs" render={() => <Dialogs 
                                                dialogsData={dialogsData}
                                                messagesData={messagesData}/>
                                      }/>
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />  
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
