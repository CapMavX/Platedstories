import React from 'react'
import img from "../assets/fish2.jpg"

function About() {
  return (
   <div className='flex flex-row  gap-4 lg:px-32 px-5 mt-[50px]'>
    <img src={img} alt="img" className=' hidden md:block w-full lg:w-1/4 p-5 rounded-[30px]' />
    <div className='flex flex-col gap-4 pt-[30px]'>
    <h1 className='font-bold text-4xl'>About Us</h1>
    <p className='font-semibold '>Welcome to Plated Stories, your go-to destination for exploring the delicious world of food! Our mission is to celebrate the rich variety of dishes from around the globe.Here, you'll find mouth watering insights into ingredients, cooking techniques and the cultural significance behind each dish.Whether you're a seasoned chef or a curious foodie, we aim to inspire your culinary journey and deepen your appreciation for the meals we love. join us as we explore flavors, traditions, and the stories that make food a universal joy!</p>
   </div>
   </div>
  )
}

export default About