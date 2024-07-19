// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';
import FavoriteRecipes from './components/FavoriteRecipes';
import sampleRecipes from './data/recipes.json';

// Définir le type Recipe pour TypeScript
interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  preparationTime: string;
  servings: number;
  tips?: string;
}

// Wrapper component to pass props
const RecipeDetailWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <div>Recette non trouvée</div>;
  }
  const recipeId = parseInt(id);
  const recipe = sampleRecipes.find((r: Recipe) => r.id === recipeId);
  return recipe ? <RecipeDetail recipe={recipe} /> : <div>Recette non trouvée</div>;
};

const FavoriteRecipesWrapper: React.FC = () => {
  return <FavoriteRecipes favoriteRecipes={sampleRecipes.filter((r: Recipe) => r.id % 2 === 0)} />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<RecipeList recipes={sampleRecipes as Recipe[]} />} />
        <Route path="/recipe/:id" element={<RecipeDetailWrapper />} />
        <Route path="/add-recipe" element={<RecipeForm />} />
        <Route path="/favorites" element={<FavoriteRecipesWrapper />} />
      </Routes>
    </Router>
  );
};

export default App;
