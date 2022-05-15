import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SpriteSVG from '../spriteSVG/SpriteSVG';
import SignOutElement from '../signOutElement/SignOutElement';
import userAuthSelector from '../../ducks/userAuthorization/selectors';
import {
  MenuList, StyleNavigationMenu, MenuLink, MenuIcons, MenuIconsOptions,
} from './StyleNavigationMenu';
import ThemeContext from '../../context/ThemeProviderContext';
import BurgerMenu from '../burgerMenu/BurgerMenu';

function NavigationMenu() {
  const userAuthData = useSelector(userAuthSelector);
  const [dropDown, setDropDown] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const { setLightTheme } = useContext(ThemeContext);
  const handleClick = () => {
    if (userAuthData !== null) {
      setDropDown(!dropDown);
    }
  };
  const changeAppTheme = () => {
    setDarkTheme(!darkTheme);
  };
  useEffect(() => {
    setLightTheme(!darkTheme);
  }, [darkTheme]);
  return (
    <StyleNavigationMenu>
      <MenuList>
        <MenuLink>
          <Link to="/" className="navigation_link">Stays</Link>
        </MenuLink>
        <MenuLink>
          <Link to="/" className="navigation_link">Attractions</Link>
        </MenuLink>
      </MenuList>
      <MenuIcons>
        <MenuIconsOptions onClick={changeAppTheme}>
          <SpriteSVG className={darkTheme ? 'night_icon _activeIcon' : 'night_icon'} name="night_icon" />
        </MenuIconsOptions>
        <MenuIconsOptions role="presentation" onClick={handleClick}>
          <SpriteSVG
            className={userAuthData === null || dropDown ? 'accountCircle _activeIcon' : 'accountCircle'}
            name="accountCircle"
          />
          {dropDown && (<SignOutElement />)}
        </MenuIconsOptions>
      </MenuIcons>
      <BurgerMenu />
    </StyleNavigationMenu>
  );
}

export default NavigationMenu;
