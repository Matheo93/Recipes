import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeCard.css';
import favIconWhite from '../assets/favori.png';
import favIconBlack from '../assets/favori (1).png';

interface RecipeCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  preparationTime: string;
  onFavoriteToggle: (id: number) => void;
  isFavorite: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  title,
  description,
  image,
  preparationTime,
  onFavoriteToggle,
  isFavorite,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <div className="recipe-content">
        <div className="recipe-header">
          <h3 className="recipe-title">{title}</h3>
          <img
            src={isFavorite ? favIconWhite : favIconBlack}
            alt={isFavorite ? "Unfavorite" : "Favorite"}
            className="favorite-icon"
            onClick={() => onFavoriteToggle(id)}
          />
        </div>
        <p className="recipe-description">{description}</p>
        <p className="recipe-time"><i className="timer-icon"></i> {preparationTime}</p>
        <button className="cook-button" onClick={handleNavigate}>Me cuisiner</button>
      </div>
    </div>
  );
};

export default RecipeCard;
