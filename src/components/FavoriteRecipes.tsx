// src/components/FavoriteRecipes.tsx
import React from 'react';

interface Recipe {
  id: number;
  title: string;
  image: string;
  preparationTime: string;
}

interface FavoriteRecipesProps {
  favoriteRecipes: Recipe[];
}

const FavoriteRecipes: React.FC<FavoriteRecipesProps> = ({ favoriteRecipes }) => {
  return (
    <div className="favorite-recipes">
      {favoriteRecipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt={recipe.title} />
          <h3>{recipe.title}</h3>
          <p>Temps de préparation: {recipe.preparationTime}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoriteRecipes;
