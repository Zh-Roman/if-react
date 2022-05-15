import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SpriteSVG from '../spriteSVG/SpriteSVG';
import {
  StyleAppAdvertising, AppIcon, AdvOffer, InstallButton, CloseButton,
} from './StyleAppAdvertising';

function AppAdvertising() {
  const [adv, closeAdv] = useState(true);
  const handleClick = () => {
    closeAdv(false);
  };
  return (
    <StyleAppAdvertising showComponent={adv ? 'flex' : 'none'}>
      <AppIcon>
        <SpriteSVG className="app_logo" name="logo_vector" />
      </AppIcon>
      <AdvOffer>Sign up in the app and get 20% off your first booking</AdvOffer>
      <Link to="/">
        {' '}
        <InstallButton>Install</InstallButton>
        {' '}
      </Link>
      <CloseButton role="presentation" onClick={handleClick}>
        <SpriteSVG className="close_button_icon" name="close_button" />
      </CloseButton>
    </StyleAppAdvertising>
  );
}

export default AppAdvertising;
