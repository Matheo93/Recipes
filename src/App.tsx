import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import UserRecipesPage from './components/UserRecipesPage';
import RecipeDetailPage from './components/RecipeDetailPage';
import RecipeForm from './components/RecipeForm';
import FavoriteRecipes from './components/FavoriteRecipes';
import sampleRecipesRaw from './data/recipes.json';
import { Recipe } from './types';

// Conversion des recettes d'exemple en type Recipe[]
const sampleRecipes: Recipe[] = sampleRecipesRaw as unknown as Recipe[];

// Définition du composant principal App
const App: React.FC = () => {
  return (
    <Router>
      {/* En-tête de l'application */}
      <Header />
      
      {/* Configuration des routes */}
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<HomePage />} />
        
        {/* Page des recettes de l'utilisateur */}
        <Route path="/recettes" element={<UserRecipesPage />} />
        
        {/* Page de détail d'une recette */}
        <Route path="/recipe/:id" element={<RecipeDetailPage recipes={sampleRecipes} />} />
        
        {/* Formulaire d'ajout de recette */}
        <Route path="/add-recipe" element={<RecipeForm />} />
        
        {/* Page des recettes favorites */}
        <Route path="/favoris" element={<FavoriteRecipes allRecipes={sampleRecipes} />} />
      </Routes>
    </Router>
  );
};

export default App;