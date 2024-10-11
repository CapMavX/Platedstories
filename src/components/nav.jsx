import React, { useContext, useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';



function Nav() {
    const [menu, setMenu] = useState(false);
   


const handleChange = () => {
    setMenu(!menu);
};

const closeMenu =() => {
    setMenu(false);
};


 


  return (
    <div className=' fixed w-full relative ' >
        <div>
            <div className='flex flex-row justify-between p-5 md:px-32 px-5  shadow-[0_3px_10px_rgba(0,0,0,0.2)]' > 
                <div  className='flex flex-row justify-between gap-[475px]'>
               <a href="/home"> <h1 className='text-xl font-semibold'>Home</h1></a>
               
                </div>
           
           
            <ul className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                <li className='hover:text-brightColor transition-all cursor-pointer'><a href="/meal_name">Meals by name</a></li>
                <li className='hover:text-brightColor transition-all cursor-pointer'><a href="/meal_ingredient">Meals by ingredient</a></li>
                <li className='hover:text-brightColor transition-all cursor-pointer'><a href="/meal_area">Meals by area</a></li>
            </ul>
            <div className='md:hidden flex items-center'>
                        {menu ? 
                            (<AiOutlineClose size={25} onClick={handleChange}/>):(
                                    <AiOutlineMenuUnfold size={25} onClick={handleChange}/>
                            ) 

                    }
                    </div>
        </div>
        <div className={`${menu ? "translate-x-0": "-translate-x-full"} z-20 lg:hidden flex flex-col  bg-black text-white left-0 top-20 absolute w-full h-fit font-semibold text-2xl text-center pt-8 pb-4 gap-8 transition-transform duration-300 rounded-lg absolute `}>
        <li className='hover:text-brightColor transition-all cursor-pointer text-[18px]'><a href="/meal_name">Meals by name</a></li>
                <li className='hover:text-brightColor transition-all cursor-pointer text-[18px]'><a href="/meal_ingredient">Meals by ingredient</a></li>
                <li className='hover:text-brightColor transition-all cursor-pointer text-[18px]'><a href="/meal_alphabet">Meals by alphabet</a></li>
                </div>
        </div>

       
    </div>
  )
}

export default Nav