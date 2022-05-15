import styled from 'styled-components';

export const StyleBookingPeriod = styled.div`
  position: relative;
  min-width: 200px;
  @media screen and (min-width: 1025px) {
    ${(props) => props.stateForCalendar};
  }
  @media screen and (max-width: 1024px) {
    border: 4px ${(props) => props.theme.colors.secondaryAccent} solid;
    border-radius: 8px;
    height: 64px;
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
export const SearchDates = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  font-size: 18px;
  line-height: 21px;
  font-weight: 400;
  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
    & span {
      display: none;
    }

    & div {
      background-color: ${(props) => props.theme.colors.primaryMain};
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      border-right: 4px ${(props) => props.theme.colors.secondaryAccent} solid;
      border-left: 4px ${(props) => props.theme.colors.secondaryAccent} solid;
      border-radius: 8px;
    }

    & div:first-child {
      margin-left: -4px;
    }

    & div:last-child {
      margin-right: -4px;
    }
  }
  @media screen and (max-width: 768px) {
    & div {
      border-right: 3px ${(props) => props.theme.colors.secondaryAccent} solid;
      border-left: 3px ${(props) => props.theme.colors.secondaryAccent} solid;
    }

    & div:first-child {
      margin-left: -3px;
    }

    & div:last-child {
      margin-right: -3px;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
    line-height: 18px;
    & div {
      border-right: 2px ${(props) => props.theme.colors.secondaryAccent} solid;
      border-left: 2px ${(props) => props.theme.colors.secondaryAccent} solid;
    }

    & div:first-child {
      margin-left: -2px;
    }

    & div:last-child {
      margin-right: -2px;
    }
  }

  & div, span {
    color: ${(props) => props.theme.colors.primaryText};
  }
`;

export const NightStayAmount = styled.div`
  position: absolute;
  left: 50%;
  bottom: 2px;
  transform: translateX(-50%);
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.colors.primaryAccent};
  @media screen and (max-width: 1024px) {
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primaryMain};
    height: 100%;
    bottom: 0;
    border-radius: 8px;
    padding: 2px;
  }
`;
