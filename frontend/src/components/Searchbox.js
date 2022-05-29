import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { GlobalState } from '../GlobalState'

function Searchbox() {
  const [categories, setCategories] = useState([''])
  const [searchField, setSearchField] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([''])
  const [filteredServices, setFilteredServices] = useState([''])
  const state = useContext(GlobalState)
  const [categoriesG] = state.categories
  const [services] = state.services
  const [users] = state.users
  const [selected, setSelected] = useState('');

  function routechange(value) {
    //setSelected(value)
    console.log('choice', value)
    // let navigate = useNavigate()

    // let path = `/Services`; 
    // navigate(path, {choice: selected});
      
  };

  // let navigate = useNavigate(); 

  // function handleSelect(key){
  //   console.log('choice', key)
    

  //     let path = `/Services`; 
  //     navigate(path, {state:{choice: key}})
    
  
  // }
  

  function searchService(e) {
    setSearchField(e.target.value)
    const searchWord = e.target.value
    //getUsers(e)


    const filter = users.filter(data => (
      data.first_name.toLowerCase().includes(searchWord.toLowerCase()) ||
      data.last_name.toLowerCase().includes(searchWord.toLowerCase())
    ))
    const filter2 = services.filter(data => (
      data.service_name.toLowerCase().includes(searchWord.toLowerCase())
    ))

    if (searchWord === "") {
      setFilteredUsers([])
      setFilteredServices([])
    }
    else
      setFilteredUsers(filter)
    setFilteredServices(filter2)



    console.log('fltrd', filteredUsers)

  }

  function Notfound() {
    if (filteredUsers.length === 0) {
      return (
        <p>User not found</p>
      )
    }
  }

  //console.log('pqr', filtered)
  function SearchVisible() {
    if (searchField)
      return (
        <div className='searchResult'>
          <h5>Users</h5>
          {/* <Notfound/> */}
          {filteredUsers.map(value => (
            <Link to="/CustomerProfile" className='searchItem'>
              <p className='searchText'>{value.first_name} {value.last_name}</p></Link>
          ))}
          <p className='searchLine'>-</p>
          <h5>Services</h5>
          {filteredServices.map(value => (
            <Link to="/Individual_Listing" className='searchItem'>
              <p className='searchText'>{value.service_name}</p></Link>
          ))}

        </div>
      )
  }


  return (
    <div>
      <div className='search'>
        <div className='floatcontainer2'>

          <div className='row2'>
            <div className='row3'>
              <BsSearch className='searchIcon'></BsSearch>
              <input
                type="search"
                className="searchbox b2"
                placeholder='Search by Seller or Service'
                onChange={(e) => searchService(e)}
              />
            </div>

          </div>
          <div className='row2'>
            <Dropdown >
              <Dropdown.Toggle id="dropdown-basic">
                Choose a Category
              </Dropdown.Toggle>


              <Dropdown.Menu>
                {categoriesG.map(value => (
                  <Dropdown.Item as={Link} to="/Services">{value}
                  </Dropdown.Item>

                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div>
          <div className='row2'>
            <input
              type="submit"
              className="btn btn-primary sb"
              value="Search"
            />
          </div>
        </div>

      </div>
      <SearchVisible />
    </div>
  )
}

export default Searchbox