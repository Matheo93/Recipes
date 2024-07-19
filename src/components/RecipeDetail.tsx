// src/components/RecipeDetail.tsx
import React from 'react';

interface RecipeDetailProps {
  recipe: {
    title: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    preparationTime: string;
    servings: number;
    tips?: string;
  };
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>Temps de préparation: {recipe.preparationTime}</p>
      <p>Portions: {recipe.servings}</p>
      <h3>Ingrédients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ul>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>
      {recipe.tips && (
        <>
          <h3>Conseils:</h3>
          <p>{recipe.tips}</p>
        </>
      )}
    </div>
  );
};

export default RecipeDetail;
