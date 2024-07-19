// src/components/RecipeList.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Recipe {
  id: number;
  title: string;
  image: string;
  preparationTime: string;
}

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <Link to={`/recipe/${recipe.id}`}>
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>Temps de préparation: {recipe.preparationTime}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
