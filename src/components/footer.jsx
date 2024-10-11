import React from 'react'
import {FaFacebook, FaInstagram} from 'react-icons/fa'
import {FaGoogle} from "react-icons/fa"
import {FaXTwitter} from "react-icons/fa6"
const Footer = () => {
  return (
    <div className='bg-brightColor h-fit p-5 mt-5'>
         <a href="mailto:abubakarsadiqmohammed@gmail.com" className='flex justify-center text-white text-[12px]'><p>abubakarsadiqmohammed@gmail.com</p></a>
        <div className='flex flex-row justify-center mt-7 gap-8 text-white'>
            <a href='https://www.facebook.com/profile.php?id=100072933673491'><FaFacebook size={22} /></a>
           <a href='https://www.instagram.com/sadiq_mohammad01?igsh=MXdqY3lzbnd6MGJxMw%3D%3D&utm_source_qr'> <FaInstagram size={22}/></a>
            <a href='https://x.com/capmavx?s=21'><FaXTwitter size={22}/></a>
            <a href="mailto:abubakarsadiqmohammed@gmail.com"><FaGoogle size={22}/></a>
           
        </div>
       
        <p className='flex justify-center text-white mt-10 mb-[0.001px] text-[10px]'>&copy;Blaze Web Creations.All right reserved</p>
    </div>
  )
}

export default Footer
