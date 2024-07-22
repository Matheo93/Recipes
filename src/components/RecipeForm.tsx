import React, { useState } from 'react';
import './RecipeForm.css';
import { useNavigate } from 'react-router-dom';
import { Recipe } from '../types';
import { div } from '@tensorflow/tfjs';
import backgroundImage from '../images/background.png';

const RecipeForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState<string[]>([]);
  const [description, setDescription] = useState<string>(''); // Ajoutez l'état pour la description
  const [preparationTime, setPreparationTime] = useState<string>('20 Min');
  const [image, setImage] = useState<string>('');
  const navigate = useNavigate();

  const handleAddIngredient = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      setIngredients([...ingredients, e.currentTarget.value]);
      e.currentTarget.value = '';
    }
  };

  const handleAddInstruction = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      setInstructions([...instructions, e.currentTarget.value]);
      e.currentTarget.value = '';
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newRecipe: Recipe = {
      id: Date.now(),
      title,
      ingredients,
      instructions,
      description, // Ajoutez la description ici
      image,
      preparationTime,
      type: 'plat', // Remplacez par le type approprié si nécessaire
    };

    const savedRecipes = localStorage.getItem('userRecipes');
    const userRecipes = savedRecipes ? JSON.parse(savedRecipes) : [];
    userRecipes.push(newRecipe);
    localStorage.setItem('userRecipes', JSON.stringify(userRecipes));

    navigate('/recettes');
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <h2>Ajouter une nouvelle recette</h2>
      <label>
        Titre :
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          minLength={3}
          className="form-input"
        />
      </label>
      <label>
        Ingrédient : (Tomate, poivron, sel, ...)
        <input
          type="text"
          onKeyPress={handleAddIngredient}
          className="form-input"
        />
      </label>
      <label>
        Instructions : (Appuyez sur Entrée pour ajouter chaque instruction)
        <textarea
          onKeyPress={handleAddInstruction}
          className="form-input"
        />
      </label>
      <label>
        Description :
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input"
        />
      </label>
      <label>
        Temps de préparation :
        <input
          type="text"
          value={preparationTime}
          onChange={(e) => setPreparationTime(e.target.value)}
          className="form-input"
        />
      </label>
      <label>
        <button type="button" className="photo-button">
          Une petite photo ?
          <input
            type="file"
            onChange={handleImageChange}
            className="file-input"
          />
        </button>
      </label>
      <button type="submit" className="submit-button">Concocter ma recette</button>
    </form>
  );
};

export default RecipeForm;
