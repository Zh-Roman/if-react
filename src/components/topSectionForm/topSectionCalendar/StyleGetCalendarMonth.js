import styled from 'styled-components';

export const StyleGetCalendarMonth = styled.ul`
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  justify-content: space-between;
  justify-items: stretch;
  align-content: space-around;
  text-align: center;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;

  & li {
    color: ${(props) => props.theme.colors.primaryText};
  }

  .currentDayTrue {
    color: ${(props) => props.theme.colors.primaryAccent};
    background-color: ${(props) => props.theme.colors.secondaryMain};
    border-radius: 8px;
    border: 1px ${(props) => props.theme.colors.primaryAccent} solid;
  }

  .currentMonthPreviousDaysTrue {
    color: ${(props) => props.theme.colors.secondaryText};
  }

  .currentMonthFalse {
    color: ${(props) => props.theme.colors.secondaryMain};
    background-color: ${(props) => props.theme.colors.primaryMain};
  }

  .checkInDay {
    background-color: ${(props) => props.theme.colors.primaryAccent};
    color: ${(props) => props.theme.colors.primaryMain};
    border-radius: 0;
  }

  .checkInDay ~ li {
    background-color: ${(props) => props.theme.colors.secondaryMain};
  }

  .monthBody.checkOutDay {
    background-color: ${(props) => props.theme.colors.secondaryText};
    color: ${(props) => props.theme.colors.primaryMain};
  }

  .firstDayOfMonth, .firstDayOfMonth ~ li {
    background-color: ${(props) => props.theme.colors.secondaryMain};
  }

  .checkOutDay ~ li {
    background-color: ${(props) => props.theme.colors.primaryMain};
  }
`;
export const MonthBodyItem = styled.li``;
