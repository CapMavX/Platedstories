import React from 'react'




export const Dishcard = (props) => {
  return (
          <div className=' max-w-xs max-auto max-w shadow-[0_3px_10px_rgba(0,0,0,0.2)]  rounded-md'>
        <img className={`rounded-xl ${props.isSmall ? 'w-full h-[300px]' : 'w-full h-[300px]'}`}  src={props.img} alt='img' />
      
    <div className='p-4'>
    <h2 className='font-bold '>{props.title}</h2>
    
    
        <p className='text-sm'>
            {props.description}
        </p>
      
      <div className='mt-2'>
        <a href="/meals" className='bg-brightColor  text-md text-white  p-2 rounded-full ' >Discover more</a>
        </div>
       </div>
       </div>
    
  )
}
