
import React, {useContext} from 'react'
import { GlobalState } from '../GlobalState'


function Services() {
  const state = useContext(GlobalState)
  const [categories] = state.categories
  console.log('c' , categories)


  return (
  
    <div className='services'> 
      <div className='serviceleft'>
         <h4>Categories</h4>
         <div className='leftcat'>
          {categories.map(cat => (
            <label>
              <input 
              type='checkbox'
               />
              <span className='checkName'>{cat}</span>
            </label>
          ))}
        </div>
      </div>
      <div className='serviceright'>
        <p className='serviceTitle'>Services</p>
      </div>
    </div>
    
  )
}

export default Services

// const service = await response.json()
//         console.log(service)
//         setServices(service)
       
//         services.forEach(element => {
//         if(arrc.includes(element.category)){
//           console.log('if')
//             return;
//         }
//         else{
//           console.log('else')
//           console.log('ele',element.category)
//             arrc.push(element.category);
//         }
//       });

//       setCategories(arrc)