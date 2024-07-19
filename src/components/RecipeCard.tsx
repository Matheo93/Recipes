import React from 'react';

interface RecipeProps {
  image: string;
  title: string;
  description: string;
  time: string;
}

const RecipeCard: React.FC<RecipeProps> = ({ image, title, description, time }) => {
  const imageUrl = require(`../images/recipes/${image}`).default;

  return (
    <div className="recipe-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Temps de préparation: {time}</p>
    </div>
  );
};

export default RecipeCard;