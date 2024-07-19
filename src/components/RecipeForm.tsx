import React, { useState } from 'react';

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
}

const RecipeForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newRecipe: Recipe = {
      id: Date.now(),
      title,
      ingredients,
      instructions,
    };
    // Ajout de la recette
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        minLength={3}
      />
      {/* Autres champs */}
    </form>
  );
};

export default RecipeForm;
