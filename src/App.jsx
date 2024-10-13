import React from "react"; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Meals from './pages/meals';

import Meal_name from './pages/Meal_name';
import Meal_ingredient from './pages/meal_ingredient';
import Meal_Letter from './pages/Meal_Letter';
import Error from './pages/error';




const App = () => {
    return(
      <div>
        <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/meals" element={<Meals/>}/>
          <Route path="/meal_name" element={<Meal_name/>}/>
          <Route path="/meal_ingredient" element={<Meal_ingredient/>}/>
          <Route path="/meal_letter" element={<Meal_Letter/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
    
}

export default App