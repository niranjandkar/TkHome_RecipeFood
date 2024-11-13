import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Loader";
import "../Styling/AboutRecipe.css";

export default function RecipeDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function fetchRecipe() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();

        if (data.meals) {
          const {
            strMeal: name,
            strMealThumb: image,
            strCategory: category,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strInstructions: instructions,
          } = data.meals[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
          ];

          setRecipe({
            name,
            image,
            category,
            ingredients,
            instructions,
          });
        } else {
          setRecipe(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchRecipe();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!recipe) {
    return <h2>No recipe available.</h2>;
  } else {
    const { name, image, category, ingredients, instructions } = recipe;

    const instructionList = instructions
      ? instructions.split(".").map((item) => item.trim()).filter((item) => item.length > 0)
      : [];

    return (
      <div className="recipe-detail-container">
        <div className="recipe-image">
          <img src={image} alt={name} />
        </div>

        <div className="recipe-info">
          <div className="recipe-header">
            <h1>{name}</h1>
          </div>
          <div className="recipe-text">
            <div className="recipe-category">
              <h4>
                <span className="category-label">Category:</span> {category}
              </h4>
            </div>
            <h4>Ingredients:</h4>
            <ul className="ingredient-list">
              {ingredients.map((ingredient, index) => ingredient && (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h4>Instructions:</h4>
            <ul className="instruction-list">
              {instructionList.map((step, index) => (
                <li key={index}>{step}.</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
