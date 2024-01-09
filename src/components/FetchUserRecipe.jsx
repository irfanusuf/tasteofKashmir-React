import React, { useEffect, useState } from 'react';
import '../styles/RecipeCard.scss';
import axios from 'axios';

const FetchUserRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/fetch/recipes');
      setRecipes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className='fetch-recipe'>

<div className='heading'><h1> Great Recipes from Great Authors</h1> </div>
      
      <div className='recipe-card-container'>
      
        {recipes.map((recipe) => (
          <div key={recipe._id} className='recipe-card'>

            <h2>Title : {recipe.title}</h2>
            <img src={recipe.imageUrl} alt='text' />

            <br />
            <span>Ingredients</span>
            <div>
              <p>{recipe.ingredients}</p>
            </div>
            <p>Instructions</p>
            <div>
              <p>{recipe.instructions}</p>
            </div>

            <p>Author</p>
            <div>
              <p>{recipe.author.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchUserRecipe;
