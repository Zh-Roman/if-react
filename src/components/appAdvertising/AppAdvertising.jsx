import React, { useState } from 'react';
import './AppAdvertising.css';
import { Link } from 'react-router-dom';
import SpriteSVG from '../spriteSVG/SpriteSVG';

function AppAdvertising() {
  const [adv, closeAdv] = useState(true);
  const handleClick = () => {
    closeAdv(false);
  };
  return (
    <div className={adv ? 'app_advertising _container' : 'display_none'}>
      <div className="app_icon">
        <SpriteSVG className="app_logo" name="logo_vector" />
      </div>
      <div>
        <p className="adv_offer">Sign up in the app and get 20% off your first booking</p>
      </div>
      <Link to="/">
        {' '}
        <p className="install_button">Install</p>
        {' '}
      </Link>
      <div role="presentation" onClick={handleClick} className="close_button"><SpriteSVG className="close_button_icon" name="close_button" /></div>
    </div>
  );
}

export default AppAdvertising;
