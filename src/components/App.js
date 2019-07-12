import React from 'react';
import logo from '../logo.svg';
import TopMenu from './Menus/TopMenu.js';
import BackgroundImage from './Pages/BackgroundImage.js';
import Home from './Pages/Home.js';
import '../App.css';

function App() {
  return (
    <div>
      <TopMenu />
      <div>
        <BackgroundImage />
        <Home />
      </div>
    </div>
  );
}

export default App;
