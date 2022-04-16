import React from 'react';
import './Header.css';
import Logo from '../../components/logo/Logo';
import NavigationMenu from '../../components/navigationMenu/NavigationMenu';

function Header() {
  return (
    <header className="header">
      <div className="header_container _container">
        <Logo />
        <NavigationMenu />
      </div>
    </header>
  );
}

export default Header;
