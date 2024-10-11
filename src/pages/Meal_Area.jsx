import React from 'react'
import Nav from '../components/nav'
import Area from '../components/area'
import End from '../components/end'
function Meal_Area() {
  return (
    <div className='flex flex-col gap-[40px]'>
      <Nav/>
      <Area/>
      <div>
        <End/>
      </div>
    </div>
  )
}

export default Meal_Area