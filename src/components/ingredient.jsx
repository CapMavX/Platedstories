import React, { useContext, useEffect, useState } from 'react';
import {FaSearch} from 'react-icons/fa';




function Ingredient() {
    const[meals, setMeals] =useState([]);
    const[searchitem, setSearchitem] = useState('');
   

    const fetchmeals = async () => {
            
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchitem}`);
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


   
 

 


  return (
    <div className=' flex flex-col justify-center items-center lg:px-32 px-16' >
        
       <div className=' w-full relative mx-auto z-10 ml-[50px] mr-[50px] '>
        <input type="search" value={searchitem} onChange={userinput}  placeholder='Search meal by ingredient' onKeyPress={Key} className=' w-full bg-gray-300  pl-10 pr-4 py-2 z-10    border-none rounded-lg focus:outline-none  ' />
        <div className=' absolute left-3 top-1/2 transform -translate-y-1/2'>
            <FaSearch className='text-[grey]'/>
        </div>
</div>

<div className=' flex flex-col justify-center items-center lg:px-32 px-5 mt-[10px]  '>
    {meals && meals.length > 0 ? (
       <div className= 'flex flex-wrap gap-8 justify-center'>
        {meals.map((meal, index) => (
            <div key={index} className='w-full lg:w-1/4 p-5  shadow-[0_3px_10px_rgba(0,0,0,0.2)] rounded-lg'>
                <img src={meal.strMealThumb} alt="img"  className='rounded-xl' sizes='50px'/>
                <div className='space-y-4'>
                <p className='font-bold  mt-0 pt-5 text-[15px]'>{meal.strMeal}</p>
                </div>
                
                <p className='font-semibold  mt-[10px] text-[13px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, illum. Quidem, ratione dolor. Dignissimos quas cumque distinctio perspiciatis illo natus a numquam sapiente. Tempora odit odio alias aperiam obcaecati aspernatur.</p>
                
                <div className='bg-[red] w-full mt-[10px] p-[6px] w-[100px] rounded-[5px] text-center'>
                
                <a href={meal.strYoutube} className='text-[13px] text-white '>Youtube</a>
                </div>
            </div>
        ))}
       </div>
    ) : (
            <p className='text-center text-red-500  mt-[30px]'>There are no meals.</p>
    )}
       </div>
    </div>
  )
}

export default Ingredient