import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/images/svg/logo_vector.svg';

function Logo() {
  return (
    <Link to="/">
      <img src={LogoImage} alt="Logo" />
    </Link>
  );
}

export default Logo;
