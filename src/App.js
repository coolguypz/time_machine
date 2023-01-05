
import React from 'react';
import { Routes,Route } from 'react-router-dom';

import './App.css'
import Footer from './components/footer'
import MYACCOUNT from './components/my_account'
import Wallet from './components/wallet'
import Home from './components/home'


function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <div className="container">
        <Routes>
        <Route path='/' element = { <Home />} />
        <Route path='/wallet' element = { <Wallet/>} />
        <Route path='/myaccount' element = { <MYACCOUNT />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
