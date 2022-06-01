import React from 'react'
import {useState, useEffect, useContext} from 'react';
import {UserContext} from '../UserContext';


function NotAuth() {

    return(
        <h2>You are not authorized</h2>
    )
  
}

export default NotAuth;