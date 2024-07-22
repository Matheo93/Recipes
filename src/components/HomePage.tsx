// Importation des dépendances nécessaires
import React, { useState } from 'react';
import './HomePage.css';
import RecipeList from './RecipeList';
import RecipeFilter from './RecipeFilter';
import sampleRecipes from '../data/recipes.json';
import { Recipe } from '../types';

// Définition du composant HomePage
const HomePage: React.FC = () => {
  // État pour stocker le type de recette sélectionné
  const [selectedType, setSelectedType] = useState<string>('');

  // Fonction pour gérer le changement de type de recette
  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  // Filtrage des recettes en fonction du type sélectionné
  const filteredRecipes = sampleRecipes.filter((recipe: Recipe) =>
    selectedType ? recipe.type === selectedType : true
  );

  // Rendu du composant
  return (
    <div className='home-page'>
      {/* En-tête de la page d'accueil */}
      <div className="homepage-header">
        <div className="homepage-text">
          <h1>Découvrez des recettes qui inspirent !</h1>
          <p>Des idées savoureuses pour chaque occasion, préparées avec amour et créativité.</p>
        </div>
      </div>
      
      {/* Contenu principal de la page d'accueil */}
      <div className="homepage-content">
        {/* Composant de filtrage des recettes */}
        <RecipeFilter selectedType={selectedType} onTypeChange={handleTypeChange} />
        
        {/* Liste des recettes filtrées */}
        <RecipeList recipes={filteredRecipes} />
      </div>
    </div>
  );
};

export default HomePage;