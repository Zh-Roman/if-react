import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Copyright, FooterBody, FooterContainer, FooterContent, StyleFooter,
} from './StyleFooter';
import SpriteSVG from '../../components/spriteSVG/SpriteSVG';

const StyleFooterLogo = styled.div`
  .footer_logo {
    display: none;
    fill: #FFFFFF;
    height: 19px;
    width: 98px;
  }

  @media screen and (max-width: 480px) {
    .footer_logo {
      display: block;
      margin: 0 auto 40px;
    }
  }
`;

function Footer() {
  return (
    <StyleFooter>
      <FooterContainer className="_container">
        <StyleFooterLogo>
          <Link to="/">
            <SpriteSVG className="footer_logo" name="logo_vector" />
          </Link>
        </StyleFooterLogo>
        <FooterBody>
          <FooterContent>
            <ul>
              <li><p>About</p></li>
              <li><Link to="/">How Triphouse works</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Privacy</Link></li>
              <li><Link to="/">Terms</Link></li>
            </ul>
          </FooterContent>
          <FooterContent>
            <ul>
              <li><p>Property types</p></li>
              <li><Link to="/">Guest houses</Link></li>
              <li><Link to="/">Hotels</Link></li>
              <li><Link to="/">Apartments</Link></li>
              <li><Link to="/">Villas</Link></li>
              <li><Link to="/">Holiday homes</Link></li>
              <li><Link to="/">Hostels</Link></li>
            </ul>
          </FooterContent>
          <FooterContent>
            <ul>
              <li><p>Support</p></li>
              <li><Link to="/">Contact Customer Service</Link></li>
              <li><Link to="/">FAQ</Link></li>
            </ul>
          </FooterContent>
        </FooterBody>
        <Copyright><p>&copy; 2020 Triphouse, Inc. All rights reserved</p></Copyright>
      </FooterContainer>
    </StyleFooter>
  );
}

export default Footer;
