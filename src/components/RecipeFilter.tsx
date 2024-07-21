// src/components/RecipeFilter.tsx
import React from 'react';
import './RecipeFilter.css';

interface RecipeFilterProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

const RecipeFilter: React.FC<RecipeFilterProps> = ({ selectedType, onTypeChange }) => {
  return (
    <div className="recipe-filter">
      <label htmlFor="recipeType">Filtrer par type de plat :</label>
      <select id="recipeType" value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
        <option value="">Tous</option>
        <option value="entrée">Entrée</option>
        <option value="plat">Plat</option>
        <option value="dessert">Dessert</option>
      </select>
    </div>
  );
};

export default RecipeFilter;
