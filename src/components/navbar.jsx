import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {BiRestaurant} from 'react-icons/bi';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai'



const Navbar = () => {
const [menu, setMenu] = useState(false);

const handleChange = () => {
    setMenu(!menu);
};

const closeMenu =() => {
    setMenu(false);
};

    return (
        <div className='fixed  w-full'>
            <div>
                <div className=' flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
                    <div className='flex flex-row justify-between'>
                        <span>
                            <BiRestaurant size={32}/>
                        </span>
                        <h1 className='text-xl font-semibold'>Plated Stories</h1>
                    </div>
                    <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                        <Link to='home' spy={true} smooth={true} duration={500} className=' hover:text-brightColor transition-all cursor-pointer'>Home</Link>
                        <Link to='dishes' spy={true} smooth={true} duration={500} className=' hover:text-brightColor transition-all  cursor-pointer'>Meals</Link>
                        <Link to='about' spy={true} smooth={true} duration={500} className=' hover:text-brightColor transition-all  cursor-pointer'>About</Link>
                        <Link to='contact' spy={true} smooth={true} duration={500} className=' hover:text-brightColor transition-all  cursor-pointer'>contact</Link>
                    </nav>

                    <div className='md:hidden flex items-center'>
                        {menu ? 
                            (<AiOutlineClose size={25} onClick={handleChange}/>):(
                                    <AiOutlineMenuUnfold size={25} onClick={handleChange}/>
                            ) 

                    }
                    </div>
                </div>
                <div className={`${menu ? "translate-x-0": "-translate-x-full"} lg:hidden flex flex-col  bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 rounded-lg `}>
                <Link to='home' spy={true} smooth={true} duration={500} className=' hover:text-brightColor transition-all cursor-pointer' onClick={closeMenu}>Home</Link>
                        <Link to='dishes' spy={true} smooth={true} duration={500} className=' hover:text-brightColor transition-all  cursor-pointer' onClick={closeMenu}>Dishes</Link>
                        <Link to='about' spy={true} smooth={true} duration={500} className=' hover:text-brightColor transition-all  cursor-pointer' onClick={closeMenu}>About</Link>
                        <Link to='contact' spy={true} smooth={true} duration={500} className=' hover:text-brightColor transition-all  cursor-pointer' onClick={closeMenu}>contact</Link>
                </div>
              
            </div> 
        </div>
    )
}

export default Navbar

