import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/logo/Logo';
import NavigationMenu from '../../components/navigationMenu/NavigationMenu';

const StyleHeader = styled.header`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 50;
  margin-top: -70px;

  & * {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @media screen and (max-width: 1024px) {
    margin-top: -50px;
  }
  @media screen and (max-width: 480px) {
    margin-top: -20px;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyleHeader>
      <HeaderContainer className="_container">
        <Logo />
        <NavigationMenu />
      </HeaderContainer>
    </StyleHeader>
  );
}

export default Header;
