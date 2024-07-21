import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FavoriteRecipes.css';
import { Recipe } from '../types';
import favIconWhite from '../assets/favori.png';
import favIconBlack from '../assets/favori (1).png';

interface FavoriteRecipesProps {
  allRecipes: Recipe[];
}

const FavoriteRecipes: React.FC<FavoriteRecipesProps> = ({ allRecipes }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [favorites, setFavorites] = useState<number[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      const favoriteIds = JSON.parse(savedFavorites) as number[];
      const favorites = allRecipes.filter(recipe => favoriteIds.includes(recipe.id));
      setFavoriteRecipes(favorites);
    }
  }, [allRecipes]);

  const handleFavoriteToggle = (id: number) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleCookClick = (id: number) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="recipe-list">
      {favoriteRecipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          <div className="recipe-content">
            <div className="recipe-header">
              <h3 className="recipe-title">{recipe.title}</h3>
              <img
                src={favorites.includes(recipe.id) ? favIconBlack : favIconWhite}
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
