import React from 'react';
import { Link } from 'react-router-dom';
import NightIcon from '../../assets/images/svg/night.svg';
import AccountIcon from '../../assets/images/svg/accountCircle.svg';
import './NavigationMenu.css';

function NavigationMenu() {
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
          <img src={NightIcon} alt="NightIcon" />
        </li>
        <li>
          <img src={AccountIcon} alt="AccountIcon" />
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
