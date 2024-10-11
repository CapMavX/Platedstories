import React, { useContext, useEffect, useState } from 'react';
import {FaSearch} from 'react-icons/fa';




function Area() {
    const[meals, setMeals] =useState([]);
    const[searchitem, setSearchitem] = useState('')

    const fetchmeals = async () => {
            
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchitem}`);
        const data = await res.json();
        setMeals(data.meals || []);
        console.log(data)
        
        
       
    }

    
    const userinput = (e) => {
        setSearchitem(e.target.value);
    };

    const Key = (e) => {
        if(e.key === 'Enter'){
            fetchmeals();
        }
    }

    const number = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nobis exercitationem aliquam? Expedita praesentium assumenda, ullam repellendus id doloremque quasi quaerat dolorum, eveniet recusandae dolore sequi, tempore reprehenderit? Accusantium, accusamus.";


   
 

 


  return (
    <div className=' flex flex-col justify-center items-center lg:px-32 px-16' >
        
       <div className='w-full relative ml-[50px] mr-[50px] '>
        <input type="search" value={searchitem} onChange={userinput}  placeholder='Search meal by area' onKeyPress={Key} className=' bg-gray-300  pl-10 pr-4 py-2 w-full   border-none rounded-lg focus:outline-none  ' />
        <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
            <FaSearch className='text-[grey]'/>
        </div>
</div>

<div className=' flex flex-col justify-center items-center lg:px-32 px-5 mt-[10px] '>
    {meals && meals.length > 0 ? (
       <div className= 'flex flex-wrap gap-8 justify-center'>
        {meals.map((meal, index) => (
            <div key={index} className='w-full lg:w-1/4 p-5  shadow-[0_3px_10px_rgba(0,0,0,0.2)] rounded-lg overflow-hidden '>
                <img src={meal.strMealThumb} alt="img"  className='rounded-xl w-full h-48 object-cover' sizes='50px'/>
                
                <p className='font-bold  mt-0 pt-5 text-[15px] '>{meal.strMeal}</p>
                
                
                <p className='font-semibold  mt-[10px] text-[13px]'>{number.substring(0, 100)}.....</p>
                
                <div className='bg-[red] w-full mt-[10px] p-[6px] w-[100px] rounded-[5px] text-center'>
                
                <a href={meal.strYoutube} className='text-[13px] text-white '>Youtube</a>
                </div>
            </div>
        ))}

       </div>
    ):(
        <p className='text-center text-red-500 mt-[40px]'>There are no meals.</p>

    )}
       </div>
    </div>
  )
}

export default Area