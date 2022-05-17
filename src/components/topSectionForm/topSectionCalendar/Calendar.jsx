import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GetCalendarMonth from './GetCalendarMonth';
import {
  StyleCalendar,
  ArrowForCalendarNext,
  NameOfMonth,
  DaysOfWeekList,
  DaysOfWeek,
  ArrowForCalendarBack,
  MonthCalendar,
  MonthTitle,
} from './StyleCalendar';

function Calendar(props) {
  const [monthCounter, setMonthCounter] = useState(0);
  const [yearCounter, setYearCounter] = useState(0);
  const [counter, setCounter] = useState(-1);
  const listOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const listOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentMonth = new Date().getMonth() + monthCounter;
  let nextMonth;
  const currentMonthYear = new Date().getFullYear() + yearCounter;
  let nextMonthYear;
  if (currentMonthYear % 4 === 0) {
    listOfDays.splice(1, 1, 29);
  }
  if (currentMonth === 11) {
    nextMonth = 0;
    nextMonthYear = currentMonthYear + 1;
  } else {
    nextMonthYear = currentMonthYear;
    nextMonth = currentMonth + 1;
  }

  function setDayOfWeek(year, month) {
    const theFirstDay = new Date(year, month, 1).getDay();
    let dayOfWeek;
    if (theFirstDay === 0) {
      dayOfWeek = 6;
    } else {
      dayOfWeek = theFirstDay - 1;
    }
    return dayOfWeek;
  }

  const firstMonthDayOfWeek = setDayOfWeek(currentMonthYear, currentMonth);
  const nextMonthDayOfWeek = setDayOfWeek(nextMonthYear, nextMonth);
  const [backArrowCalendar, setBackArrowCalendar] = useState(false);
  const calendarSliderNext = () => {
    if (counter !== 8) {
      if (currentMonth === 11) {
        setMonthCounter(new Date().getMonth() * -1);
        setYearCounter(1);
      } else {
        setMonthCounter(monthCounter + 1);
        setCounter(counter + 1);
      }
      setBackArrowCalendar(true);
    }
  };
  const calendarSliderBack = () => {
    if (currentMonth === 0) {
      setMonthCounter(11 - new Date().getMonth());
      setYearCounter(yearCounter - 1);
    } else {
      if (counter >= 0) {
        setMonthCounter(monthCounter - 1);
        setCounter(counter - 1);
      }
      if (counter === 0) {
        setBackArrowCalendar(false);
      }
    }
  };
  return (
    <StyleCalendar className={props.calendarClassName}>
      <ArrowForCalendarNext role="presentation" onClick={calendarSliderNext} />
      {backArrowCalendar && (
        <ArrowForCalendarBack role="presentation" onClick={calendarSliderBack} />
      )}
      <MonthCalendar id="firstMonth">
        <MonthTitle>
          <NameOfMonth>{`${listOfMonths[currentMonth]} ${currentMonthYear}`}</NameOfMonth>
          <DaysOfWeekList>
            <DaysOfWeek>Mo</DaysOfWeek>
            <DaysOfWeek>Tu</DaysOfWeek>
            <DaysOfWeek>We</DaysOfWeek>
            <DaysOfWeek>Th</DaysOfWeek>
            <DaysOfWeek>Fr</DaysOfWeek>
            <DaysOfWeek>Sa</DaysOfWeek>
            <DaysOfWeek>Su</DaysOfWeek>
          </DaysOfWeekList>
        </MonthTitle>
        <GetCalendarMonth
          month={currentMonth}
          year={currentMonthYear}
          dayOfWeek={firstMonthDayOfWeek}
          listOfDays={listOfDays}
          listOfMonths={listOfMonths}
          setStateForCalendar={props.setStateForCalendar}
        />
      </MonthCalendar>
      <MonthCalendar id="nextMonth">
        <MonthTitle>
          <NameOfMonth>{`${listOfMonths[nextMonth]} ${nextMonthYear}`}</NameOfMonth>
          <DaysOfWeekList>
            <DaysOfWeek>Mo</DaysOfWeek>
            <DaysOfWeek>Tu</DaysOfWeek>
            <DaysOfWeek>We</DaysOfWeek>
            <DaysOfWeek>Th</DaysOfWeek>
            <DaysOfWeek>Fr</DaysOfWeek>
            <DaysOfWeek>Sa</DaysOfWeek>
            <DaysOfWeek>Su</DaysOfWeek>
          </DaysOfWeekList>
        </MonthTitle>
        <GetCalendarMonth
          month={nextMonth}
          year={nextMonthYear}
          dayOfWeek={nextMonthDayOfWeek}
          listOfDays={listOfDays}
          listOfMonths={listOfMonths}
          setStateForCalendar={props.setStateForCalendar}
        />
      </MonthCalendar>
    </StyleCalendar>
  );
}

Calendar.propTypes = {
  calendarClassName: PropTypes.string,
  setStateForCalendar: PropTypes.func.isRequired,
};
export default Calendar;
