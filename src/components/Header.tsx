import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const handleClearSearch = () => {
    setSearchText('');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchText.length < 3) {
      alert('Veuillez entrer au moins 3 caractères pour effectuer une recherche.');
      return;
    }
    navigate(`/?search=${encodeURIComponent(searchText)}`);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
        <Link to="/recettes" className={`nav-link ${location.pathname === '/recettes' ? 'active' : ''}`}>Recettes</Link>
        <Link to="/add-recipe" className={`nav-link ${location.pathname === '/add-recipe' ? 'active' : ''}`}>Concocter ma recette</Link>
        <Link to="/favoris" className={`nav-link ${location.pathname === '/favoris' ? 'active' : ''}`}>Favoris</Link>
      </nav>
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
