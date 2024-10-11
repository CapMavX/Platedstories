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
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-16 '>
        <h1 id='dishes' className='text-4xl font-semibold text-center pt-10 pb-10'>
            Meals
        </h1>
        <div className='flex flex-wrap gap-8 justify-center'>
            <Dishcard  img={rice} title="Rice and beans" description="Rice and beans is a timeless combo-simple, nutritious, and delicious.A global favorite, it blends fluffy rice with hearty beans, creating a satisfying, flavorful meal thats easy to love"/>
            <Dishcard img={semo} title="Semo and Egusi Soup" description="Semo and egusi is a Nigerian classic. Soft, stretchy semo complements the rich, nutty flavors of egusi soup, creating a delicious and hearty meal nbasvmhGasdk JsjhdJhdbmcsdjZHMbjshd"/>
            <Dishcard img={spaghetti} title="Spaghetti" description="Spaghetti is a beloved pasta dish known for its simplicity and versatility, Paired with sauces like marinara or bolognese, its a comforting and flavorful meal enjoyed by people all over the world."/>
            <Dishcard img={jellof} title="Jollof rice" description="Jollof rice is a vibrant and flavorful West African dish, known for its rich blend of tomatoes, peppers and spices. Often enjoyed with chicken, fish, or beef, its a beloved meal enjoyed by people worldwide"/>
            <Dishcard img={Fried} title="Fried Rice" description="Fried rice is a flavorful dish made by stir-frying cooked rice with vegetables, meat, and spices. Popular in many cultures, its a versatile meal that transform leftovers into a delicious satisfying plate"/>
            <Dishcard img={Beans} title="Beans" description="Beans are a nutritious and verstaile legume, packed with protein and fiber. Enjoyed in various cuisines, they can be cooked in stews, salads, or as a side dish, offering rich flavors and health benefits in every bite."/>
        </div>
    </div>
  )
}
