// Importation des dépendances nécessaires
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FavoriteRecipes.css';
import { Recipe } from '../types';
import favIconWhite from '../assets/favori.png';
import favIconBlack from '../assets/favori (1).png';

// Définition de l'interface pour les props du composant
interface FavoriteRecipesProps {
  allRecipes: Recipe[];
}

// Définition du composant FavoriteRecipes
const FavoriteRecipes: React.FC<FavoriteRecipesProps> = ({ allRecipes }) => {
  // État pour stocker les recettes favorites
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  // État pour stocker les IDs des recettes favorites
  const [favorites, setFavorites] = useState<number[]>(() => {
    // Initialisation des favoris à partir du localStorage
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  // Hook pour la navigation
  const navigate = useNavigate();

  // Effet pour charger les recettes favorites
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      const favoriteIds = JSON.parse(savedFavorites) as number[];
      // Filtrer les recettes favorites parmi toutes les recettes
      const favorites = allRecipes.filter(recipe => 
        favoriteIds && Array.isArray(favoriteIds) && favoriteIds.includes(recipe.id)
      );
      setFavoriteRecipes(favorites);
    }
  }, [allRecipes]);

  // Fonction pour basculer l'état de favori d'une recette
  const handleFavoriteToggle = (id: number) => {
    const updatedFavorites = favorites && Array.isArray(favorites) && favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...(favorites || []), id];
    setFavorites(updatedFavorites);
    // Sauvegarder les favoris dans le localStorage
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  // Fonction pour naviguer vers la page de détail d'une recette
  const handleCookClick = (id: number) => {
    navigate(`/recipe/${id}`);
  };

  // Rendu du composant
  return (
    <div className="recipe-list">
      {favoriteRecipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          <div className="recipe-content">
            <div className="recipe-header">
              <h3 className="recipe-title">{recipe.title}</h3>
              <img
                src={favorites && Array.isArray(favorites) && favorites.includes(recipe.id) ? favIconBlack : favIconWhite}
                alt="Favorite Icon"
                className="favorite-icon"
                onClick={() => handleFavoriteToggle(recipe.id)}
              />
            </div>
            <p className="recipe-description">{recipe.description}</p>
            <p className="recipe-time"><i className="timer-icon"></i> {recipe.preparationTime}</p>
            <button className="cook-button" onClick={() => handleCookClick(recipe.id)}>Me cuisiner</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoriteRecipes;
