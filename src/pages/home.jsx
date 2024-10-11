import React from "react"; 
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Dishes from '../components/dishes'
import About from '../components/About'
import Footer from '../components/footer'

const Home = () => {
    return(
        <div>
         <div id="home">
            <Navbar/>
         </div>
         <div >
            <Hero/>
         </div>
         <div id="dishes">
            <Dishes/>
         </div>
         <div id="about">
            <About/>
         </div>
         <div id="contact">
            <Footer/>
         </div>
      
        </div>
    )
        
    
}

export default Home