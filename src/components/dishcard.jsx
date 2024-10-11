import React from 'react'



export const Dishcard = (props) => {
  return (
    <div className='w-full lg:w-1/4 p-5  shadow-[0_3px_10px_rgba(0,0,0,0.2)] rounded-lg'>
        <img className='rounded-xl' src={props.img} alt='img' />
    <div className='space-y-4'>
    <h3 className='font-bold  mt-0 text-xl pt-6'>{props.title}</h3>
    </div>
    <div className='flex flex-row items-center justify-center gap-4'>
        <h3 className='  text-2px '>
            {props.description.substring(0, 100)}....
        </h3>
        </div>
        <div className='bg-brightColor p-1  font-semibold w-40 mt-2 rounded-xl   h-fit'>
        <a href="/meals" className='ml-2 text-white' >Discover more</a>
        </div>
        

        </div>
       
    
  )
}
