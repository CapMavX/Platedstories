import React from 'react'
import Nav from "../components/nav"
import Name from '../components/name'
import End from '../components/end'



function Meal_name() {
  return (
    <div className='flex flex-col gap-[40px]'>
     <div>
        <Nav/> 
        </div> 
        <Name/>
        <div className=' mt-[350px]'>
          <End/>
        </div>
    
    </div>
  )
}

export default Meal_name