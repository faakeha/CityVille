import React from "react";
import {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserContextProvider = props => {

    const userLogin = localStorage.getItem('userLogin')
    const userToken = localStorage.getItem('userToken')

    const [loggedin, setLoggedin] = useState(userLogin ? true : false);
    const [token, setToken] = useState(userLogin ? userToken : false);
    
    
    return(
        <UserContext.Provider value={{value:[token, setToken], value2:[loggedin, setLoggedin]}}>{props.children}</UserContext.Provider>
    )

}

export const UserConsumer = UserContext.Consumer