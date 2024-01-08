import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Recipes.scss'
import useAuth from '../auth/auth';
import Image from '../assets/onion.png'

function Recipes() {

  useAuth();  // custom hook



  const [recipeData, setRecipeData] = useState([]);
  const [category, setCategory] = useState('chicken');
  const [error, setError] = useState("");

   const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };



  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setError("");
        const response = await axios.get(`http://localhost:4000/api/fetch/recipes?q=${category}`)
        setRecipeData(response.data.d);
      } catch (error) {
        console.error('Error fetching recipe data:', error);
        setError(error);
      }
    };
 
    fetchRecipes();
  }, [category]);


 




  

  return (



<div className= {error ? "display-port" :  "display-port-2"} > 



      <div className='recipes-container'>

      <div  className='heading'>
              <label>Category: </label>
                <input type="text" value={category} onChange={handleCategoryChange} />
     </div>


{error ? <div > <img className='spinner' src= {Image} alt='no' width={200}/> </div> :

<div className='recipe-container'>
  

{recipeData.map((recipe, recipeIndex) => (
 
 <div key={recipeIndex} >

   <h1>{recipe.Title}</h1>

   <img src={recipe.Image} alt={recipe.Title} width="100%" />

   <h2>Ingredients:</h2>


   <ul>
     {Object.values(recipe.Ingredients).map((ingredient, index) => (
       <li key={index}>{ingredient}</li>
     ))}
   </ul>

   <h2 >Instructions:</h2>

   <p>{recipe.Instructions}</p>
   
 </div>
))}
</div>}
</div>
</div> 

  );
}

export default Recipes;
























// import { useState, useEffect } from "react";
// import "./App.css";
// import axios from "./axios";

// const App = () => {
//   const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState("");

//   // using Async Await
//   const getMyPostData = async () => {
//     try {
//       const res = await axios.get("/posts");
//       setMyData(res.data);
//     } catch (error) {
//       setIsError(error.message);
//     }
//   };

//   // NOTE:  calling the function
//   useEffect(() => {
//     getMyPostData();
//   }, []);

//   return (
//     <>
//       <h1>Axios Tutorial</h1>
//       {/* {isError !== "" && <h2>{isError}</h2>} */}

//       <div className="grid">
//         {myData.slice(0, 9).map((post) => {

// const {id , title , body } = post ;
// return  (
//   <div key={id} className="card">
//     <h2>{title.slice(0, 15).toUpperCase()}</h2>
//     <p>{body.slice(0, 100)}</p>
//   </div>
// )})
// }      
         
//       </div>
//     </>
//   );
// };

// export default App;