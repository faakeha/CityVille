import React, { createContext, useState, useEffect } from "react";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
	const [admin_service, setAdminService] = useState();
	const [users, setUsers] = useState([""]);
	const [categories, setCategories] = useState([""]);
	const [services, setServices] = useState([""]);
	const [servcat, setServcat] = useState([""]);
	const [role, setRole] = useState();
  const [app, setAppointments] = useState([]);
	const [user, setUser] = useState({
		id: "",
		first_name: "",
		last_name: "",
		token: "",
	});

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

		async function allUsers(event) {
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

		async function allCategories() {
			console.log("in ac");
			const cat = await fetch("http://localhost:3001/CityVille/Categories", {
				method: "GET",
			})
				.then((response) => response.json())
				.then((data) => {
					return data;
				});

			setCategories(cat);
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

		//   async function get_role(){
		//     const token = localStorage['userToken']
		//     console.log('in role obj')
		//     const ser = await fetch('http://localhost:3001/CityVille/getRole', {
		//         method: 'GET',
		//         headers: {
		//         'Content-Type':'application/json',
		//         "token":`Bearer ${token}`
		//         }

		//       })
		//       .then((response) => response.json())
		//       .then(data => {
		//         return data;
		//     });
		//     //console.log('srv', ser)
		//     setRole(ser)

		// }
		//   get_role();

		async function getUser(event) {
			console.log("in users method");
			const id = localStorage["user_id"];
			const response = await fetch(
				`http://localhost:3001/CityVille/user/${id}`,
				{
					method: "GET",
				}
			)
				.then((response) => response.json())
				.then((data) => {
					return data;
				});

			setUser(response);
		}
		getUser();

    async function getAdminServices(event) {
			console.log("in users method");
			const token = localStorage["userToken"];
			const response = await fetch(
				`http://localhost:3001/CityVille/AdminServices`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						token: `Bearer ${token}`,
					},
				}
			)
				.then((response) => response.json())
				.then((data) => {
					return data;
				});

			setAdminService(response);
		}
		getAdminServices();


		async function getAppointments(event) {
			console.log("in users method");
			const token = localStorage["userToken"];
			const response = await fetch(
				`http://localhost:3001/CityVille/getApp`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						token: `Bearer ${token}`,
					},
				}
			)
				.then((response) => response.json())
				.then((data) => {
					return data;
				});

			setAppointments(response);
		}
		getAppointments();


	}, []);

	const state = {
		categories: [categories, setCategories],
		services: [services, setServices],
		users: [users, setUsers],
		servcat: [servcat, setServcat],
		role: [role, setRole],
		user: [user, setUser],
		admin_service: [admin_service, setAdminService],
    app : [app, setAppointments]
	};

	return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
