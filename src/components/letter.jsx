import React, { useContext, useEffect, useState } from 'react';
import {FaSearch} from 'react-icons/fa';




function Letter() {
    const[meals, setMeals] =useState([]);
    const[searchitem, setSearchitem] = useState('')

    const fetchmeals = async (letter) => {
            
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
        const data = await res.json();
        console.log(data);
        setMeals(data.meals || []);
       
        
        
       
    }

    
    const userinput = (e) => {
        const letter = e.target.textContent;
        setSearchitem(letter);
        fetchmeals(letter);
    };

    
    const number = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nobis exercitationem aliquam? Expedita praesentium assumenda, ullam repellendus id doloremque quasi quaerat dolorum, eveniet recusandae dolore sequi, tempore reprehenderit? Accusantium, accusamus.";


   
 

 


  return (
    <div className=' flex flex-col justify-center items-center lg:px-32 px-16' >
        
      <div className='flex gap-[3px] sm:gap-2 lg:gap-3'>
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
            <button key={letter} onClick={userinput}>{letter}</button>
        ))}
      </div>

      <div className=' flex flex-col items-center justify-center my-12 mx-auto '>
    {meals && meals.length > 0 ? (
       <div className= 'grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 max-w-screen-lg mx-auto'>
        {meals.map((meal, index) => (
            <div key={index} className='max-w-xs max-auto max-w shadow-[0_3px_10px_rgba(0,0,0,0.2)]  rounded-md'>
            <img src={meal.strMealThumb} alt="img"  className='rounded-xl w-full'/>
            <div className='p-4'>
            <h1 className='font-bold'>{meal.strMeal}</h1>
            
            
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, fugit velit suscipit eius sunt labore doloremque maiores officia magni facilis provident accusantium sit deleniti distinctio ea mollitia necessitatibus eaque enim.</p>
            
           
            <div className='mt-2'>
            <a href={meal.strYoutube}  className='bg-[red]  text-md text-white p-2 rounded-full '>Youtube</a>
            </div>
        </div>
        </div>
        ))}
       </div>
    ) : (
           <p className='text-[red]'>There are no meals</p>
           
    )}
       </div>
    </div>
  )
}

export default Letter