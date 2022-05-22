import React, {createContext, useState, useEffect} from 'react'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [users,setUsers] = useState([''])
    const [categories, setCategories] = useState([''])
    const [services, setServices] = useState([''])

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

        async function allUsers(event){
            console.log('in users method')
        
            const response = await fetch('http://localhost:3001/CityVille/getAllUsers', {
              method: 'GET',
            }).then((response) => response.json())
                .then(data => {
              return data;
          });

          setUsers(response)
          }
          allUsers()

        async function allCategories(){
            console.log('in ac')
            const cat = await fetch('http://localhost:3001/CityVille/Categories', {
                method: 'GET',

              })
              .then((response) => response.json())
              .then(data => {
                return data;
            });

            setCategories(cat)
        }
        allCategories()

        async function allServices(){
            console.log('in services')
            const ser = await fetch('http://localhost:3001/CityVille/Services', {
                method: 'GET',

              })
              .then((response) => response.json())
              .then(data => {
                return data;
            });
            console.log('srv', ser)
            setServices(ser)
        }
        allServices()

        
    }, [])

    

    const state = {
        categories : [categories, setCategories],
        services : [services, setServices],
        users : [users, setUsers]
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>    )
}