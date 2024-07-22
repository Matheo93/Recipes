// Importation des dépendances nécessaires
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

// Définition du composant Header
const Header: React.FC = () => {
  // Utilisation des hooks de react-router-dom
  const location = useLocation();
  const navigate = useNavigate();
  
  // État pour stocker le texte de recherche
  const [searchText, setSearchText] = useState('');

  // Fonction pour effacer le champ de recherche
  const handleClearSearch = () => {
    setSearchText('');
  };

  // Fonction pour mettre à jour le texte de recherche
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // Fonction pour gérer la soumission du formulaire de recherche
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchText.length < 3) {
      alert('Veuillez entrer au moins 3 caractères pour effectuer une recherche.');
      return;
    }
    navigate(`/?search=${encodeURIComponent(searchText)}`);
  };

  // Rendu du composant
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      
      {/* Navigation */}
      <nav className="nav">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
        <Link to="/recettes" className={`nav-link ${location.pathname === '/recettes' ? 'active' : ''}`}>Recettes</Link>
        <Link to="/add-recipe" className={`nav-link ${location.pathname === '/add-recipe' ? 'active' : ''}`}>Concocter ma recette</Link>
        <Link to="/favoris" className={`nav-link ${location.pathname === '/favoris' ? 'active' : ''}`}>Favoris</Link>
      </nav>
      
      {/* Formulaire de recherche (affiché uniquement sur la page d'accueil) */}
      {location.pathname === '/' && (
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input 
            type="text" 
            value={searchText} 
            onChange={handleSearchChange} 
            className="search-input" 
            placeholder="Rechercher une recette :"
          />
          {searchText && <button type="button" className="clear-button" onClick={handleClearSearch}>×</button>}
        </form>
      )}
    </header>
  );
};

export default Header;