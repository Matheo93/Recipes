import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import './RecipeList.css';
import { Recipe } from '../types';

// Définition de l'interface pour les props du composant
interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  // Récupération des paramètres de recherche de l'URL
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  // État pour stocker les recettes filtrées
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);

  // État pour stocker les recettes favorites
  const [favorites, setFavorites] = useState<number[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Effet pour filtrer les recettes en fonction de la recherche
  useEffect(() => {
    let filtered = recipes;

    if (searchQuery) {
      filtered = filtered.filter(recipe => 
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredRecipes(filtered);
  }, [recipes, searchQuery]);

  // Effet pour sauvegarder les favoris dans le localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Fonction pour basculer l'état de favori d'une recette
  const handleFavoriteToggle = (id: number) => {
    setFavorites(prevFavorites => {
      // Vérification si prevFavorites est défini et est un tableau
      if (prevFavorites && Array.isArray(prevFavorites)) {
        return prevFavorites.includes(id)
          ? prevFavorites.filter(favId => favId !== id)
          : [...prevFavorites, id];
      }
      // Si prevFavorites est indéfini ou n'est pas un tableau, initialiser avec l'ID actuel
      return [id];
    });
  };

  // Rendu du composant
  return (
    <div className="recipe-list">
      {filteredRecipes.map(recipe => (
        <RecipeCard 
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          description={recipe.description}
          image={recipe.image}
          preparationTime={recipe.preparationTime}
          onFavoriteToggle={handleFavoriteToggle}
          // Vérification si favorites est défini et est un tableau
          isFavorite={favorites && Array.isArray(favorites) && favorites.includes(recipe.id)}
        />
      ))}
    </div>
  );
};

export default RecipeList;
