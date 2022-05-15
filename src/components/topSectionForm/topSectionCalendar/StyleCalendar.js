import styled from 'styled-components';
import arrowForCalendar from '../../../assets/images/svg/arrowForCalendar.svg';

export const StyleCalendar = styled.div`
  display: flex;
  position: absolute;
  top: 70px;
  left: -85px;
  background-color: ${(props) => props.theme.colors.primaryMain};
  border-radius: 8px;

  &.entering {
    animation: show_calendar 1s forwards;
  }

  &.exiting {
    animation: show_calendar 1s reverse;
  }

  @keyframes show_calendar {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1024px) {
    z-index: 5;
    top: -64px;
    left: 0;
    width: 100%;
    height: 248px;
    justify-content: space-around;
  }
  @media screen and (max-width: 768px) {
    height: 250px;
  }
  @media screen and (max-width: 480px) {
    top: -250%;
    left: -4px;
    width: 102%;
    flex-direction: column;
    height: fit-content;
    justify-content: center;
  }
`;
export const ArrowForCalendarNext = styled.div`
  padding: 10px 10px;
  position: absolute;
  right: 15px;
  top: 10px;
  width: 8px;
  height: 18px;
  background-image: url(${arrowForCalendar});
  background-repeat: no-repeat;
  background-position: center;
`;
export const ArrowForCalendarBack = styled.div`
  padding: 10px 10px;
  position: absolute;
  transform: scale(-1, 1);
  left: 15px;
  top: 10px;
  width: 8px;
  height: 18px;
  background-image: url(${arrowForCalendar});
  background-repeat: no-repeat;
  background-position: center;
`;
export const MonthCalendar = styled.div`
  width: 290px;
  margin: 12px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 16px;
    border-radius: 8px;
  }
  @media screen and (max-width: 480px) {
    background-color: ${(props) => props.theme.colors.primaryMain};
    margin: 0;
  }
`;
export const MonthTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NameOfMonth = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 11px;
  color: ${(props) => props.theme.colors.primaryText};
`;
export const DaysOfWeekList = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  line-height: 16px;
  font-weight: 300;
`;
export const DaysOfWeek = styled.div`
  color: ${(props) => props.theme.colors.primaryText};
`;
