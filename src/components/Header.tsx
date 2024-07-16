import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/add-recipe">Ajouter une recette magique</Link></li>
          <li><Link to="/favorites">Favoris</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;