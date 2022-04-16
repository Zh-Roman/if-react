import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';
import SpriteSVG from '../spriteSVG/SpriteSVG';

function Logo() {
  return (
    <Link to="/">
      <SpriteSVG className="logo_vector" name="logo_vector" />
    </Link>
  );
}

export default Logo;
