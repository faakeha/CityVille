import React, { Component } from 'react'
import '../App.css';
import {Link} from 'react-router-dom';
import {UserContext} from '../UserContext';
import {useContext} from 'react';

function Nav() {
   /*  const {value, value2} = useContext(UserContext)
    const [loggedin, setLoggedin] = value2
    const [token, setToken] = value 
 */
    
    
        return (
            <nav>
                <h3>Logo</h3>
                <ul className="nav-links">
                    <Link to='/Register'>
                        <li>Register</li></Link>
                    <Link to='/Login'>
                        <li>Login</li></Link>
                    <Link to='/Events'>
                        <li>Events</li></Link>
                </ul>
            </nav>
        )
    }
    


export default Nav;