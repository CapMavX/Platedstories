import React from 'react'
import Nav from '../components/nav'
import Ingredient from '../components/ingredient'
import End from '../components/end'

function Meal_ingredient() {
  return (
    <div className='flex flex-col gap-[40px]'>

      
        <Nav/>
      
      <Ingredient/>
      <div className=' mt-[350px]'>
          <End/>
        </div>
    </div>
  )
}

export default Meal_ingredient