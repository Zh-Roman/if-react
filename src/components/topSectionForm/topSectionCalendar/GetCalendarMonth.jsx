import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MonthBodyItem, StyleGetCalendarMonth } from './StyleGetCalendarMonth';
import FormContext from '../../../context/TopSectionFormContext';

function GetCalendarMonth(props) {
  const currentDayGetTime = new Date(
    `${new Date().getDate()} ${props.listOfMonths[new Date().getMonth()]} ${new Date().getFullYear()}`,
  ).getTime();
  const daysInWeek = 7;
  let daysInMonth = props.listOfDays[props.month];
  const arrayOfNumbers = [];
  let notThisMonthStart = 0;
  let notThisMonthEnd = 0;
  for (let i = 1; i <= daysInMonth; i += 1) {
    arrayOfNumbers.push({
      day: i,
      month: props.listOfMonths[props.month],
      year: props.year,

    });
  }
  let previousMonthDays = props.listOfDays[props.month - 1];
  if (props.month === 0) {
    previousMonthDays = 31;
  }
  for (let prevDays = previousMonthDays, i = 0; i < props.dayOfWeek; i += 1, prevDays -= 1, daysInMonth += 1) {
    arrayOfNumbers.unshift({ day: prevDays });
    notThisMonthStart = i;
  }
  for (let nextDays = 1, i = 0; daysInMonth % daysInWeek !== 0; nextDays += 1, daysInMonth += 1, i += 1) {
    arrayOfNumbers.push({ day: nextDays });
    notThisMonthEnd = nextDays;
  }
  const keys = [];
  for (let i = 1; i <= arrayOfNumbers.length; i += 1) {
    keys.push(i);
  }
  const arrayOfObj = arrayOfNumbers.map((date) => ({ date }));
  const keysForObject = keys.map((key) => ({ key }));
  for (let i = 0; i < arrayOfObj.length; i += 1) {
    Object.assign(arrayOfObj[i], keysForObject[i]);
  }
  for (let i = 0; i < arrayOfNumbers.length; i += 1, notThisMonthStart -= 1) {
    if (notThisMonthStart >= 0 || i >= arrayOfNumbers.length - notThisMonthEnd) {
      arrayOfObj[i].currentMonth = 'currentMonthFalse';
    }
  }
  const {
    dateFromValue,
    setDateFromValue,
    dateToValue,
    setDateToValue,
  } = useContext(FormContext);
  const handleClick = (e) => {
    const { id, className } = e.currentTarget;
    if (!className.includes('currentMonthFalse') && new Date(id).getTime() >= currentDayGetTime) {
      if (dateFromValue !== 'Check-in' && dateToValue !== 'Check-out') {
        setDateFromValue(id);
        setDateToValue('Check-out');
      }
      if (dateFromValue === 'Check-in') {
        setDateFromValue(id);
      }
      if (dateFromValue !== 'Check-in'
        && dateToValue === 'Check-out'
        && new Date(id).getTime() > new Date(dateFromValue).getTime()) {
        setDateToValue(id);
        setTimeout(props.setStateForCalendar(false), 1000);
      }
    }
  };
  return (
    <StyleGetCalendarMonth>
      {arrayOfObj.map((item) => (
        <MonthBodyItem
          role="presentation"
          value={item.date.day}
          key={item.key}
          id={`${item.date.day} ${item.date.month} ${item.date.year}`}
          onClick={handleClick}
          className={`
          ${item.currentMonth}
          ${new Date(Object.values(item.date).join(' ')).getTime() === currentDayGetTime
            ? 'current_day' : null}
          ${new Date(Object.values(item.date).join(' ')).getTime() < currentDayGetTime
              ? 'current_month_previous_days' : null}
          ${new Date(Object.values(item.date).join(' ')).getTime() === new Date(dateFromValue).getTime()
                ? 'check_in_day' : null}
          ${new Date(Object.values(item.date).join(' ')).getTime() > new Date(dateFromValue).getTime()
                  ? 'days_after_check_in_day' : null}
          ${new Date(Object.values(item.date).join(' ')).getTime() === new Date(dateToValue).getTime()
                    ? 'check_out_day' : null}
          ${new Date(Object.values(item.date).join(' ')).getTime() > new Date(dateToValue).getTime()
                      ? 'days_after_check_out_day' : null}
          `}
        >
          {item.date.day}
        </MonthBodyItem>
      ))}
    </StyleGetCalendarMonth>
  );
}

GetCalendarMonth.propTypes = {
  listOfDays: PropTypes.arrayOf(PropTypes.number).isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  dayOfWeek: PropTypes.number.isRequired,
  listOfMonths: PropTypes.arrayOf(PropTypes.string).isRequired,
  setStateForCalendar: PropTypes.func.isRequired,
};
export default GetCalendarMonth;
