import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import { Recipe } from '../types';

// Définition du composant UserRecipesPage
const UserRecipesPage: React.FC = () => {
  // État pour stocker les recettes de l'utilisateur
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);

  // Effet pour charger les recettes de l'utilisateur depuis le localStorage
  useEffect(() => {
    // Récupération des recettes sauvegardées dans le localStorage
    const savedRecipes = localStorage.getItem('userRecipes');
    // Si des recettes sont trouvées, mise à jour de l'état
    if (savedRecipes) {
      setUserRecipes(JSON.parse(savedRecipes));
    }
  }, []); // Le tableau de dépendances vide signifie que cet effet ne s'exécute qu'une fois au montage du composant

  // Rendu du composant
  return <RecipeList recipes={userRecipes} />;
};

export default UserRecipesPage;