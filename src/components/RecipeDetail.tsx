import React from 'react';
import { useParams } from 'react-router-dom';
import { Recipe } from '../types';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Dans une vraie application, vous récupéreriez la recette à partir de l'ID
  const recipe: Recipe = {
    id: '1',
    title: 'Exemple de recette',
    description: 'Ceci est un exemple de recette.',
    ingredients: ['Ingrédient 1', 'Ingrédient 2'],
    instructions: ['Étape 1', 'Étape 2'],
    category: 'Plat principal',
    cuisine: 'Française',
    prepTime: 30,
    servings: 4,
    image: 'https://example.com/image.jpg'
  };

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.description}</p>
      <h3>Ingrédients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <p>Temps de préparation: {recipe.prepTime} minutes</p>
      <p>Pour {recipe.servings} personnes</p>
    </div>
  );
};

export default RecipeDetail;