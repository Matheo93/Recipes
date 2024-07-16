import React, { useState } from 'react';
import { Recipe } from '../types';

const RecipeForm: React.FC = () => {
  const [recipe, setRecipe] = useState<Partial<Recipe>>({
    title: '',
    description: '',
    ingredients: [],
    instructions: [],
    category: '',
    cuisine: '',
    prepTime: 0,
    servings: 0,
    image: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRecipe(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Recette soumise:', recipe);
    // Ici, vous ajouteriez la logique pour sauvegarder la recette
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter une nouvelle recette</h2>
      <div>
        <label htmlFor="title">Titre:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={recipe.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={recipe.description}
          onChange={handleChange}
          required
        />
      </div>
      {/* Ajoutez d'autres champs ici pour les ingrédients, instructions, etc. */}
      <button type="submit">Ajouter la recette</button>
    </form>
  );
};

export default RecipeForm;