import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyleTopSectionFormButton } from '../topSectionForm/topSectionFormButton/TopSectionFormButton';

const StyleTabMenu = styled.div`
  margin: 104px 0 0;
  height: 64px;
  width: max-content;
  border: 3px ${(props) => props.theme.colors.secondaryMain} solid;
  border-radius: 8px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  background-color: ${(props) => props.theme.colors.secondaryMain};

  .margin_right {
    &:not(:last-child) {
      margin-right: 5px;
    }
  }

  ._passive {
    color: ${(props) => props.theme.colors.primaryText};
    background-color: ${(props) => props.theme.colors.secondaryMain};
    border-color: ${(props) => props.theme.colors.secondaryMain};
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;

    & span {
      color: ${(props) => props.theme.colors.primaryText};
      font-size: 24px;
      line-height: 28px;
    }
  }

  @media screen and (max-width: 1024px) {
    margin: 80px 0 0;
  }
  @media screen and (max-width: 768px) {
    margin: 40px 0 0;
    height: fit-content;
    & button {
      font-size: 19px;
      line-height: 22px;
      height: 45px;
      min-width: fit-content;
      padding: 0 8px;

      & span {
        font-size: 19px;
        line-height: 22px;
      }
    }

    ._passive {
      font-size: 19px;
      line-height: 22px;

      & span {
        font-size: 19px;
        line-height: 22px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    margin: 12px 0;
    height: fit-content;
    & button {
      font-size: 19px;
      line-height: 22px;
      height: 35px;
      min-width: fit-content;
      padding: 0 8px;

      & span {
        display: none;
      }
    }

    ._passive {
      height: 35px;
      font-size: 19px;
      line-height: 22px;

      & span {
        display: none;
      }
    }
  }
`;
const FlexContainer = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

function TabMenu(props) {
  const [activeButton, setActiveButton] = useState('regions');
  const handleClick = (e) => {
    if (e.target.name !== undefined) {
      setActiveButton(e.target.name);
      props.setDestinationSection(e.target.name);
    } else {
      setActiveButton('places');
      props.setDestinationSection('places');
    }
  };
  return (
    <FlexContainer>
      <StyleTabMenu>
        <StyleTopSectionFormButton
          name="regions"
          className={
            activeButton === 'regions'
              ? 'margin_right'
              : 'margin_right _passive'
          }
          type="button"
          onClick={handleClick}
        >
          Regions
        </StyleTopSectionFormButton>
        <StyleTopSectionFormButton
          name="cities"
          className={
            activeButton === 'cities'
              ? 'margin_right'
              : 'margin_right _passive'
          }
          type="button"
          onClick={handleClick}
        >
          Cities
        </StyleTopSectionFormButton>
        <StyleTopSectionFormButton
          name="places"
          className={
            activeButton === 'places'
              ? 'margin_right'
              : 'margin_right _passive'
          }
          type="button"
          onClick={handleClick}
        >
          Places
          {' '}
          <span role="presentation" onClick={handleClick}>of interest</span>
        </StyleTopSectionFormButton>
      </StyleTabMenu>
    </FlexContainer>
  );
}

TabMenu.propTypes = {
  setDestinationSection: PropTypes.func.isRequired,
};
export default TabMenu;
