import React from "react";
import { useState, useEffect, useContext } from "react";
import { GlobalState } from "./GlobalState";

function GlobalUser() {
	const [admin_service, setAdminService] = useState([]);
	const state = useContext(GlobalState);

	//const [role, setRole] = state.role
	const [isAdmin, setIsAdmin] = useState(false);
	const [isLogged, setIsLogged] = useState(false);
	const [app, setAppointments] = useState([]);
	const [role, setRole] = useState(localStorage.getItem("user_role"));
	//const [token, setToken] = useState(false);
	const [user, setUser] = useState({});
	const [token, setToken] = useState();
	const [allUsers, setAllUsers] = useState([]);



	console.log(isLogged, "log in");
	console.log(app, "appointments");
	console.log(admin_service, "as");
	

	useEffect(() => {
		const firstLogin = localStorage.getItem("firstlogin");
		const tok = localStorage.getItem("userToken");
		
		if (firstLogin) {
			console.log('token')
			setToken(tok);
		}
	}, []);

	useEffect(() => {
		if (token) {
		console.log('token')
			async function profile() {
				console.log("in users method");

				const response = await fetch(
					"http://localhost:3001/CityVille/profile",
					{
						method: "GET",
						headers: {
							token: `Bearer ${token}`,
						},
					}
				)
					.then((response) => response.json())
					.then((data) => {
						console.log("api call2", data);
						return data;
					});

				console.log("api call3", response);
				setIsLogged(true);
				response.user_role === 1 ? setIsAdmin(true) : setIsAdmin(false);
				setUser(response);
			}
			profile();

			async function getAppointments() {
				console.log("in users method");
				//const token = localStorage["userToken"];
				const response = await fetch(`http://localhost:3001/CityVille/getApp`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						token: `Bearer ${token}`,
					},
				})
					.then((response) => response.json())
					.then((data) => {
						return data;
					});

				setAppointments(response);
			}
			getAppointments();

			async function getAdminServices() {
				console.log("in users method");
				//const token = localStorage["userToken"];
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
				console.log('as', response)
			}

			
				getAdminServices();

				async function getAllUsers() {
					console.log("in users method");
					//const token = localStorage["userToken"];
					const response = await fetch(
						`http://localhost:3001/CityVille/users`,
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
	
					setAllUsers(response);
					console.log('as', response)
				}

				getAllUsers()


			

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

			/*  async function getUser() {
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
    getUser();*/
		}
	}, [token, role]);

	return {
		user: [user, setUser],
		admin: [isAdmin, setIsAdmin],
		admin_service: [admin_service, setAdminService],
		app: [app, setAppointments],
		isLogged: [isLogged, setIsLogged],
		isAdmin: [isAdmin, setIsAdmin],
		role: [role, setRole],
		allUsers: [allUsers, setAllUsers],

	};
}

export default GlobalUser;
