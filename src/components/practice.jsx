import React, { useEffect, useState } from 'react'

function Practice() {

  const [meal, setMeal] = useState([]);
  const [searchitem, setSearchitem] = useState("");
  const [loading, setLoading] = useState(false)

function fetchdata() {
  setLoading(true)
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchitem}`)
  .then(response => response.json())
  .then (data => {
    setMeal(data.meals || []);
    console.log(data)
    

    
  })
  setLoading(false)

  .catch(error => console.log('Error', error))
}


const changesearch = (e) => {
setSearchitem(e.target.value)
};

if(loading) {
return(
  <div className='min-h-screen bg-black'>
    <h1>Loading</h1>
  </div>
)
}

const Key = (e) => {
  if(e.key === 'Enter') {
      fetchdata();
  }
};

  

  
 
    
  return (
    <div>
        <h1>Beans</h1>
        <input type="search" value={searchitem} onChange={changesearch} onKeyPress={Key} />
        <div>
          {meal.map((meal, index)=> (
            <div key={index}>
              <img src={meal.strMealThumb} alt="img" />
              <p>{meal.strMeal}</p>
            </div>
          ))}
        </div>
   
   
    </div>
  )
}

export default Practice