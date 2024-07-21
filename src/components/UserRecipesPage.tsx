import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import { Recipe } from '../types';

const UserRecipesPage: React.FC = () => {
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const savedRecipes = localStorage.getItem('userRecipes');
    if (savedRecipes) {
      setUserRecipes(JSON.parse(savedRecipes));
    }
  }, []);

  return <RecipeList recipes={userRecipes} />;
};

export default UserRecipesPage;
