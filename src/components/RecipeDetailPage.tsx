// Importation des dépendances nécessaires
import React from 'react';
import { useParams } from 'react-router-dom';
import { Recipe } from '../types';
import './RecipeDetailPage.css';

// Définition de l'interface pour les props du composant
interface RecipeDetailPageProps {
  recipes: Recipe[];
}

// Définition du composant RecipeDetailPage
const RecipeDetailPage: React.FC<RecipeDetailPageProps> = ({ recipes }) => {
  // Extraction de l'ID de la recette depuis les paramètres de l'URL
  const { id } = useParams<{ id: string }>();

  // Vérification de l'existence de l'ID
  if (!id) {
    return <div>Recette non trouvée</div>;
  }

  // Recherche de la recette correspondante dans la liste des recettes
  const recipe = recipes.find(r => r.id === parseInt(id, 10));

  // Si la recette n'est pas trouvée, affichage d'un message d'erreur
  if (!recipe) {
    return <div>Recette non trouvée</div>;
  }

  // Rendu du composant
  return (
    <div className="recipe-detail">
      {/* Titre de la recette */}
      <h1>{recipe.title}</h1>

      {/* Liste des ingrédients */}
      <h2>Ingrédients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      {/* Instructions de la recette */}
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetailPage;