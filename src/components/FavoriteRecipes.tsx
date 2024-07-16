import React from 'react';
import { Recipe } from '../types';

const FavoriteRecipes: React.FC = () => {
  // Dans une vraie application, vous récupéreriez cela depuis le stockage local ou une API
  const favorites: Recipe[] = [
    {
      id: '1',
      title: 'Recette favorite 1',
      description: 'Description de la recette favorite 1',
      ingredients: ['Ingrédient 1', 'Ingrédient 2'],
      instructions: ['Étape 1', 'Étape 2'],
      category: 'Dessert',
      cuisine: 'Italienne',
      prepTime: 20,
      servings: 2,
      image: 'https://example.com/image1.jpg'
    },
    // Ajoutez d'autres recettes favorites ici
  ];

  return (
    <div>
      <h2>Mes recettes favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt={recipe.title} />
          <p>{recipe.description}</p>
          {/* Ajoutez d'autres détails de la recette ici */}
        </div>
      ))}
    </div>
  );
};

export default FavoriteRecipes;