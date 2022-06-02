import React, { Component, useContext } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { DataProvider, GlobalState } from "./GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContextProvider } from "./UserContext";
import Header1 from "./components/Header1";
import Footer from "./components/Footer";
import PageRoutes from "./components/PageRoutes";



function App() {
	// const role = JSON.parse(localStorage.getItem('user_role'))
	

	return (
		<DataProvider>
			<Router>
				{/* {role == 1 ? <Header1/> : role == 2 ? <Header3/> : role == 3 ? <Header2/> : <Header/> } */}
				<Header1 />
				<Footer />
				<div className="App">
				<PageRoutes/>
				</div>
			</Router>
		</DataProvider>
	);
}

export default App;
