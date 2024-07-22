// Importation des dépendances nécessaires
import React from 'react';
import { Recipe } from '../types';

// Définition de l'interface pour les props du composant
interface RecipeDetailProps {
  recipe: Recipe;
}

// Définition du composant RecipeDetail
const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
  // Rendu du composant
  return (
    <div className="recipe-detail">
      {/* Titre de la recette */}
      <h2>{recipe.title}</h2>

      {/* Image de la recette */}
      <img src={recipe.image} alt={recipe.title} />

      {/* Temps de préparation */}
      <p>Temps de préparation: {recipe.preparationTime}</p>

      {/* Liste des ingrédients */}
      <h3>Ingrédients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      {/* Liste des instructions */}
      <h3>Instructions:</h3>
      <ul>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;