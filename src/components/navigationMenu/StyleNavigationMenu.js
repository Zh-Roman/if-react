import styled from 'styled-components';

export const StyleNavigationMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  .navigation_link {
    font-weight: 400;
    font-size: 24px;
    line-height: 44px;
    color: #FFFFFF;
    margin-right: 24px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const MenuIcons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MenuLink = styled.li`
  &::after {
    content: "";
    display: block;
    align-self: flex-end;
    border-bottom: 4px #F5BD41 solid;
    margin-bottom: -4px;
    margin-right: 24px;
    position: relative;
    top: -10px;
    opacity: 0;
    transition: all 1s ease 0.2s;
  }

  &:hover::after {
    top: 0;
    opacity: 1;
  }
`;
export const MenuIconsOptions = styled.li`
  margin-left: 24px;
  position: relative;

  .night_icon {
    height: 30px;
    width: 30px;
    fill: #FFFFFF;
    @media screen and (max-width: 480px) {
      height: 16px;
      width: 16px;
    }
  }

  .accountCircle {
    height: 40px;
    width: 40px;
    fill: #FFFFFF;
    @media screen and (max-width: 480px) {
      height: 24px;
      width: 24px;
    }
  }

  ._activeIcon {
    fill: #F5BD41;
  }

`;
