import React from 'react'
import { Dishcard } from './dishcard'
import rice from '../assets/rice.jpg'
import semo from '../assets/semo.jpg'
import spaghetti from '../assets/spaghetti.jpg'
import jellof from '../assets/jellof.jpg'
import Fried from '../assets/Fried.jpg'
import Beans from '../assets/Beans.jpg'

 
export default function     () {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen my-12 mx-auto '>
        <h1 id='dishes' className='text-4xl font-semibold text-center pt-10 pb-10'>
            Meals
        </h1>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 max-w-screen-lg mx-auto'>
          
            <Dishcard  img={rice} title="Rice and beans" description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corporis, suscipit mollitia labore fugit excepturi, repellat voluptates tenetur doloremque reprehenderit architecto, perspiciatis ex temporibus. Sed, debitis! Veritatis quam dolorem enim.' />
            <Dishcard img={semo} title="Semo and Egusi Soup" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corporis, suscipit mollitia labore fugit excepturi, repellat voluptates tenetur doloremque reprehenderit architecto, perspiciatis ex temporibus. Sed, debitis! Veritatis quam dolorem enim."/>
            <Dishcard img={spaghetti} title="Spaghetti" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corporis, suscipit mollitia labore fugit excepturi, repellat voluptates tenetur doloremque reprehenderit architecto, perspiciatis ex temporibus. Sed, debitis! Veritatis quam dolorem enim."/>
            <Dishcard img={jellof} title="Jollof rice" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corporis, suscipit mollitia labore fugit excepturi, repellat voluptates tenetur doloremque reprehenderit architecto, perspiciatis ex temporibus. Sed, debitis! Veritatis quam dolorem enim."/>
            <Dishcard img={Fried} isSmall={true} title="Fried Rice" description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corporis, suscipit mollitia labore fugit excepturi, repellat voluptates tenetur doloremque reprehenderit architecto, perspiciatis ex temporibus. Sed, debitis! Veritatis quam dolorem enim.'/>
            <Dishcard img={Beans} title="Beans" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corporis, suscipit mollitia labore fugit excepturi, repellat voluptates tenetur doloremque reprehenderit architecto, perspiciatis ex temporibus. Sed, debitis! Veritatis quam dolorem enim."/>
        </div>
    </div>
  )
}
