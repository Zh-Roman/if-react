import styled from 'styled-components';

export const StyleBurgerMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-left: 16px;
    position: relative;
    height: 24px;
    width: 24px;
    .burger_line_second,
    .burger_line_third {
      top: 11px;
    }

    .burger_line_fourth {
      top: 18px;
    }

    ${(props) => props.isOpen};
  }
`;
export const BurgerLine = styled.div`
  position: absolute;
  top: 4px;
  right: 0;
  width: 24px;
  height: 2px;
  background-color: #FFFFFF;
  transition: all 0.5s ease 0.2s;
`;
export const BurgerMenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 120%;
  left: 0;
  transform: translateX(-75%);
  text-align: right;
  height: 0;
  overflow: hidden;
  transition: all 0.5s ease 0.2s;

  & a {
    text-decoration: underline;
    text-decoration-color: #F5BD41;
    text-decoration-thickness: 2px;
    font-size: 19px;
    line-height: 22px;
    color: #FFFFFF;
  }
`;
