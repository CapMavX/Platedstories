import React from 'react'
import Nav from '../components/nav'
import Letter from '../components/letter'
import End from '../components/end'
function Meal_Area() {
  return (
    <div className='flex flex-col gap-[40px]'>
      <Nav/>
      <Letter/>
      <div className='mt-[380px]'>
        <End/>
      </div>
    </div>
  )
}

export default Meal_Area