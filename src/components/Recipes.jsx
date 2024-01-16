import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Recipes.scss";
import Image from "../assets/onion.png";

function Recipes() {

  const [recipeData, setRecipeData] = useState([]);
  const [category, setCategory] = useState("chicken");
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(false);
        const response = await axios.get(
          `http://localhost:4000/rapid-api/fetch/recipes?q=${category}`
        );
        setRecipeData(response.data.d);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(true);
      }
    };

    fetchRecipes();
  }, [category]);

  return (
    <div className={loading ? "display-port" : "display-port-2"}>
      <div className="recipes-container">
        <div className="heading">
          <label>Category: </label>
          <input type="text" value={category} onChange={handleCategoryChange} />
        </div>

        {loading ? (
          <div>
            <img className="spinner" src={Image} alt="no" width={200} />
          </div>
        ) : (
          <div className="recipe-container">
            {recipeData.map((recipe, recipeIndex) => (
              <div key={recipeIndex}>
                <h1>{recipe.Title}</h1>

                <img src={recipe.Image} alt={recipe.Title} width="100%" />

                <h2>Ingredients:</h2>
                <ul>
                  {Object.values(recipe.Ingredients).map(
                    (ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    )
                  )}
                </ul>

                <h2>Instructions:</h2>

                <p>{recipe.Instructions}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Recipes;
