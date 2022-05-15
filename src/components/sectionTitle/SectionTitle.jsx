import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleSectionTitle = styled.h2`
  line-height: 47px;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primaryText};

  &::after {
    content: "";
    display: block;
    margin: 20px auto -24px;
    height: 4px;
    width: 100px;
    background-color: ${(props) => props.theme.colors.secondaryAccent};;
    position: relative;
    top: -20px;
    opacity: 0;
    transition: all 1s ease 0.2s;
  }

  &:hover::after {
    opacity: 1;
    top: 0;
  }

  @media screen and (max-width: 768px) {
    line-height: 40px;
    font-size: 34px;
  }
  @media screen and (max-width: 480px) {
    font-size: 28px;
    line-height: 33px;
    &:hover::after {
      opacity: 0;
    }
  }
`;

function SectionTitle(props) {
  return (

    <StyleSectionTitle>
      {props.children}
    </StyleSectionTitle>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};
export default SectionTitle;
