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

  .current_day {
    color: ${(props) => props.theme.colors.primaryAccent};
    background-color: ${(props) => props.theme.colors.secondaryMain};
    border-radius: 8px;
    border: 1px ${(props) => props.theme.colors.primaryAccent} solid;
  }

  .current_month_previous_days {
    color: ${(props) => props.theme.colors.secondaryText};
  }

  .currentMonthFalse {
    color: ${(props) => props.theme.colors.secondaryMain};
    background-color: ${(props) => props.theme.colors.primaryMain};
  }

  .check_in_day {
    background-color: ${(props) => props.theme.colors.primaryAccent};
    color: ${(props) => props.theme.colors.primaryMain};
    border-radius: 0;
  }

  .days_after_check_in_day {
    background-color: ${(props) => props.theme.colors.secondaryMain};
  }

  .check_out_day {
    background-color: ${(props) => props.theme.colors.secondaryText};
    color: ${(props) => props.theme.colors.primaryMain};
  }

  .days_after_check_out_day {
    background-color: ${(props) => props.theme.colors.primaryMain};
  }
`;
export const MonthBodyItem = styled.li``;
