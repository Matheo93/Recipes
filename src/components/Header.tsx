import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/recettes">Recettes</Link></li>
          <li><Link to="/ajouter-recette">Ajouter une recette</Link></li>
          <li><Link to="/favoris">Favoris</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;