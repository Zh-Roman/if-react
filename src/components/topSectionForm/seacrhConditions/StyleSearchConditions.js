import styled from 'styled-components';

export const StyleSearchConditions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: relative;
  min-width: 250px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.primaryMain};
  @media screen and (min-width: 1025px) {
    ${(props) => props.stateForFilter};
  }
  @media screen and (max-width: 1024px) {
    border: 4px ${(props) => props.theme.colors.secondaryAccent} solid;
    border-radius: 8px;
    height: 64px;
    padding: 5px;

  }
  @media screen and (max-width: 768px) {
    border: 3px ${(props) => props.theme.colors.secondaryAccent} solid;
  }
  @media screen and (max-width: 480px) {
    border: 2px ${(props) => props.theme.colors.secondaryAccent} solid;
    font-size: 15px;
    line-height: 18px;
    height: 45px;
  }
`;

export const ConditionValues = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    color: ${(props) => props.theme.colors.primaryText};
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    justify-content: space-around;
    & span {
      display: none;
    }

    & > div {
      height: 100%;
      width: 100%;
    }

    & > div:nth-of-type(2) {
      padding: 0 16px;
      border-right: 1px solid ${(props) => props.theme.colors.secondaryText};
      border-left: 1px solid ${(props) => props.theme.colors.secondaryText};
    }
  }
  @media screen and (max-width: 480px) {
    & div {
      font-size: 15px;
      line-height: 18px;
    }
  }
`;

export const ConditionFilters = styled.div`
  max-width: 100%;
  padding: 22px;
  background-color: ${(props) => props.theme.colors.primaryMain};
  position: absolute;
  right: 0;
  top: 70px;
  border-radius: 8px;
  box-shadow: 5px 5px 5px -5px ${(props) => props.theme.colors.primaryAccent};


  &.entering {
    animation: show_condition_filters 1s forwards;
  }

  &.exiting {
    animation: show_condition_filters 1s reverse;
  }

  @keyframes show_condition_filters {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1024px) {
    box-sizing: content-box;
    border: 6px ${(props) => props.theme.colors.secondaryAccent} solid;
    box-shadow: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    padding: 0;
    width: 100%;
    min-height: 64px;
    margin: -6px;
    top: 0;
    & > div {
      padding: 0 16px;
      width: 100%;
    }

    & > div:nth-of-type(2) {
      border-right: 1px solid ${(props) => props.theme.colors.secondaryText};
      border-left: 1px solid ${(props) => props.theme.colors.secondaryText};
    }
  }
  @media screen and (max-width: 768px) {
    border: 6px ${(props) => props.theme.colors.secondaryAccent} solid;
    grid-template-columns: 1fr;
    grid-template-rows:  repeat(3, 1fr);

    & > div:nth-of-type(2) {
      padding: 8px 16px;
      border-right: none;
      border-left: none;
    }
  }
  @media screen and (max-width: 480px) {
    border: 4px ${(props) => props.theme.colors.secondaryAccent} solid;
    margin: -4px;
  }
`;
