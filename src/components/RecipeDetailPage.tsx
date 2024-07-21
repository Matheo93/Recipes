import React from 'react';
import { useParams } from 'react-router-dom';
import { Recipe } from '../types';
import './RecipeDetailPage.css';

interface RecipeDetailPageProps {
  recipes: Recipe[];
}

const RecipeDetailPage: React.FC<RecipeDetailPageProps> = ({ recipes }) => {
  const { id } = useParams<{ id: string }>();

  // Vérifiez que l'ID n'est pas undefined avant de l'utiliser
  if (!id) {
    return <div>Recette non trouvée</div>;
  }

  const recipe = recipes.find(r => r.id === parseInt(id, 10));

  if (!recipe) {
    return <div>Recette non trouvée</div>;
  }

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <h2>Ingrédients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetailPage;
