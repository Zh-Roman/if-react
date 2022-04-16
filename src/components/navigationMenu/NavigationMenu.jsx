import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.css';
import SpriteSVG from '../spriteSVG/SpriteSVG';
import useAuth from '../../hooks/useAuth';
import SignOutElement from '../signOutElement/SignOutElement';

function NavigationMenu() {
  const { userAuthData } = useAuth();
  const [dropDown, setDropDown] = useState(false);
  const handleClick = () => {
    setDropDown(!dropDown);
  };
  return (
    <nav className="nav_menu">
      <ul className="menu_list">
        <li className="menu_link">
          <Link to="/">Stays</Link>
        </li>
        <li className="menu_link">
          <Link to="/">Attractions</Link>
        </li>
      </ul>
      <ul className="menu_icons">
        <li>
          <SpriteSVG className="night_icon" name="night_icon" />
        </li>
        <li role="presentation" onClick={handleClick} className="account_icon">
          <SpriteSVG
            className={userAuthData.userData === null || dropDown ? 'accountCircle _activeIcon' : 'accountCircle'}
            name="accountCircle"
          />
          {dropDown && (<SignOutElement />)}
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
