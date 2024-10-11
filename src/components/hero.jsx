import React from 'react'

function Hero() {
  return (
    <div className='min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url("./assets/bg3.png")] bg-cover bg-no-repeat'>
        <div className='w-full lg:w-2/3 space-y-5'>
            <h1 className=' text-backgroundColor font-semibold text-6xl '>Explore the world of food-simple, delicious, and worth knowing. </h1>
            <h2 className='text-backgroundColor font-semibold'>From everyday ingredients to cullinary secrets, 
 discover how food connects cultures, traditions, 
 and people across the globe.</h2>
        </div>
    </div>
  )
}

export default Hero