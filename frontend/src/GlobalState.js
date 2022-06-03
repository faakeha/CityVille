import React, { createContext, useState, useEffect } from "react";
import GlobalUser from "./GlobalUser";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
	
	const [categories, setCategories] = useState([""]);
	const [services, setServices] = useState([""]);
	const [servcat, setServcat] = useState([""]);
	const [users, setUsers] = useState([""]);
	
	console.log(categories, 'gsc')
	useEffect(() => {
		//console.log('hi from global state')
		/* const firstLogin = localStorage.getItem('firstLogin')
        const rfToken = localStorage.getItem('userToken')
        console.log('lala', rfToken)
        if(firstLogin) {
            async function refreshToken(){
                console.log('in rf')
                const response = await fetch('http://localhost:3001/CityVille/token', {
                    method: 'POST',
                    body: JSON.stringify({
                        token: rfToken
                    })
                  })
                  console.log('gb', response)
                  setToken(response.accesstoken)
    
                  setTimeout(() => {
                      refreshToken()
                  }, 10 * 60 * 1000)
              
            
            }
            refreshToken()
        }*/
		// async function getUser(event){
		//   console.log('in users method')

		//   const response = await fetch(`http://localhost:3001/CityVille/user/${id}`, {
		//     method: 'GET',
		//   }).then((response) => response.json())
		//       .then(data => {
		//     return data;
		// });

		// setUser(response)
		// }
		// getUser()
		

		
		async function allCategories() {
			console.log("in ac");
			const other = "Other"
	
	
			const cat = await fetch("http://localhost:3001/CityVille/Categories", {
				method: "GET",
			})
				.then((response) => response.json())
				.then((data) => {
					return data;
				});
	
			setCategories(cat);
			//setCategories([...cat], other)
			
		}
		allCategories();
	
		async function allServices() {
			console.log("in services");
			const ser = await fetch("http://localhost:3001/CityVille/Services", {
				method: "GET",
			})
				.then((response) => response.json())
				.then((data) => {
					return data;
				});
			console.log("srv", ser);
			setServices(ser);
		}
		allServices();
	
		async function serv() {
			console.log("in serv method");
	
			const data = await fetch("http://localhost:3001/CityVille/getServices", {
				method: "GET",
			})
				.then((response) => response.json())
				.then((data) => {
					return data;
				});
	
			setServcat(data);
			console.log("serv", data);
		}
		serv();

		async function allUsers() {
			console.log("in users method");
		   
			const response = await fetch("http://localhost:3001/CityVille/sellers", {
				method: "GET",
			})
				.then((response) => response.json())
				.then((data) => {
					return data;
				});
	
			setUsers(response);
		}
	
		allUsers();
	

				
	}, []);

	const state = {
		
        globalUser: GlobalUser(),
		categories: [categories, setCategories],
    	services: [services, setServices],
		servcat: [servcat, setServcat],
		users: [users, setUsers],
		

	};

	return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
