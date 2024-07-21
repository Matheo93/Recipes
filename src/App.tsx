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

const sampleRecipes: Recipe[] = sampleRecipesRaw as unknown as Recipe[];

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recettes" element={<UserRecipesPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage recipes={sampleRecipes} />} />
        <Route path="/add-recipe" element={<RecipeForm />} />
        <Route path="/favoris" element={<FavoriteRecipes allRecipes={sampleRecipes} />} />
      </Routes>
    </Router>
  );
};

export default App;
