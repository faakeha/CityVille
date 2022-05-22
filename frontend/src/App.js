import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Events from './components/Events';
import Homepage from './components/Homepage';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react';
import {UserContextProvider} from './UserContext';
import Searchbox from './components/Searchbox';
import {DataProvider} from './GlobalState';
import Header from './components/Header';
import Footer from './components/Footer';
import Popup from './components/Popup';
import Services from './components/Services';


function App() {
  
  return(
    
  <DataProvider>
    
    
  <Router>
  <Header/>
    <Footer/>
    <div className='App'>
    
      <Routes>
      
      <Route path="" element={<Homepage/>} />
      <Route path="/HomePage" element={<Homepage/>} />
      <Route path="/Popup" element={<Popup/>} />
      <Route path="/Searchbox" element={<Searchbox/>} />
      <Route path="/Register/:role" element={<Register/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Nav" element={<Nav/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Events" element={<Events/>} />

      
      </Routes>
    </div>
    </Router>
    </DataProvider>
    );
}
 

export default App;