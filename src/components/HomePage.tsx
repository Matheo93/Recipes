import React, { useState } from 'react';
import './HomePage.css';
import RecipeList from './RecipeList';
import RecipeFilter from './RecipeFilter';
import sampleRecipes from '../data/recipes.json';
import { Recipe } from '../types';

const HomePage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  const filteredRecipes = sampleRecipes.filter((recipe: Recipe) =>
    selectedType ? recipe.type === selectedType : true
  );

  return (
    <div className='home-page'  >
      <div className="homepage-header">
        <div className="homepage-text">
          <h1>Découvrez des recettes qui inspirent !</h1>
          <p>Des idées savoureuses pour chaque occasion, préparées avec amour et créativité.</p>
        </div>
      </div>
      <div className="homepage-content">
        <RecipeFilter selectedType={selectedType} onTypeChange={handleTypeChange} />
        <RecipeList recipes={filteredRecipes} />
      </div>
    </div>
  );
};

export default HomePage;
