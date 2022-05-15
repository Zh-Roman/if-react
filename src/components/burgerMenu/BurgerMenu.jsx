import React, { useState } from 'react';
import { BurgerLine, BurgerMenuNav, StyleBurgerMenu } from './StyleBurgerMenu';

function BurgerMenu() {
  const isOpenTrue = `
.burger_line_first {
    display: none;
  }
.burger_line_second {
    transform: rotate(45deg);
  }
.burger_line_third {
    transform: rotate(-45deg);
  }
.burger_line_fourth {
    display: none;
  }
.burger_menu_nav {
    height: 50px;
  }
`;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyleBurgerMenu isOpen={isOpen ? isOpenTrue : null} onClick={() => setIsOpen(!isOpen)}>
      <BurgerLine className="burger_line_first" />
      <BurgerLine className="burger_line_second" />
      <BurgerLine className="burger_line_third" />
      <BurgerLine className="burger_line_fourth" />
      <BurgerMenuNav className="burger_menu_nav">
        <a href="/src/pages">Stays</a>
        <a href="/src/pages">Attractions</a>
      </BurgerMenuNav>
    </StyleBurgerMenu>
  );
}

export default BurgerMenu;
