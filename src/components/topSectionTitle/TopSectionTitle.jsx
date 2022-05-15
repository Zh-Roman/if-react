import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleTopSectionTitle = styled.h1`
  color: #FFFFFF;
  font-size: 50px;
  line-height: 59px;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media screen and (max-width: 1024px) {
    font-size: 45px;
    line-height: 53px;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 47px;
  }
  @media screen and (max-width: 480px) {
    font-size: 30px;
    line-height: 35px;
  }
`;

function TopSectionTitle({ children }) {
  return (
    <StyleTopSectionTitle>
      {children}
    </StyleTopSectionTitle>
  );
}

TopSectionTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};
export default TopSectionTitle;
