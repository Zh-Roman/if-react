import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SpriteSVG from '../spriteSVG/SpriteSVG';

const StyleLogo = styled.div`
  .logo_vector {
    width: 205px;
    height: 40px;
    fill: #3077C6;
  }

  @media screen and (max-width: 480px) {
    .logo_vector {
      width: 122px;
      height: 24px;
    }
  }
`;

function Logo() {
  return (
    <StyleLogo>
      <Link to="/">
        <SpriteSVG className="logo_vector" name="logo_vector" />
      </Link>
    </StyleLogo>
  );
}

export default Logo;
