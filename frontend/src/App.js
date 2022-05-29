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
import Services from './components/Services';
import CommunityReports from './components/CommunityReports';
import CustomerAppointments from './components/CustomerAppointments';
import SellerAppointments from './components/SellerAppointments';
import Individual_listing from './components/Individual_Listings';
import PostListing from './components/PostListing';
import CustomerProfile from './components/CustomerProfile';
import SellerRequests from './components/SellerRequests';


function App() {
  
  return(
    
  <DataProvider>
    
    
  <Router>
  <Header/>
  
    <Footer/>
    <div className='App'>
    
      <Routes>
      
      
      <Route path="/Listing" element={<Individual_listing/>} />
      <Route path="/Homepage" element={<Homepage/>} />
      <Route path="/Searchbox" element={<Searchbox/>} />
      <Route path="/Register/:role" element={<Register/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Nav" element={<Nav/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Events" element={<Events/>} />
      <Route path="/PostListing" element={<PostListing/>} />
      <Route path="/CustomerProfile" element={<CustomerProfile/>} />
      <Route path="/Individual_Listing" element={<Individual_listing/>} />
      <Route path="/SellerRequests" element={<SellerRequests/>} />



      

      
      </Routes>
    </div>
    </Router>
    </DataProvider>
    );
}
 

export default App;