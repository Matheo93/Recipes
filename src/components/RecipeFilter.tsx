// src/components/RecipeFilter.tsx
import React from 'react';
import './RecipeFilter.css';

// Définition de l'interface pour les props du composant
interface RecipeFilterProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

// Définition du composant RecipeFilter
const RecipeFilter: React.FC<RecipeFilterProps> = ({ selectedType, onTypeChange }) => {
  // Rendu du composant
  return (
    <div className="recipe-filter">
      {/* Étiquette pour le sélecteur de type de plat */}
      <label htmlFor="recipeType">Filtrer par type de plat :</label>
      
      {/* Sélecteur de type de plat */}
      <select 
        id="recipeType" 
        value={selectedType} 
        onChange={(e) => onTypeChange(e.target.value)}
      >
        {/* Options du sélecteur */}
        <option value="">Tous</option>
        <option value="entrée">Entrée</option>
        <option value="plat">Plat</option>
        <option value="dessert">Dessert</option>
      </select>
    </div>
  );
};

export default RecipeFilter;