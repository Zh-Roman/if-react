import React, { useEffect, useState } from 'react';
import GetCalendarMonth from './GetCalendarMonth';
import './Calendar.css';

let counter = -1;

function Calendar(props) {
  const [monthCounter, setMonthCounter] = useState(0);
  const [yearCounter, setYearCounter] = useState(0);

  const listOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const listOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentMonth = new Date().getMonth() + monthCounter;
  let nextMonth;
  const currentMonthYear = new Date().getFullYear() + 1 + yearCounter;
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
  const [checkInDateFirstBlock, getCheckInDateFirstBlock] = useState('Check-in');
  const [checkInDateSecondBlock, getCheckInDateSecondBlock] = useState('Check-in');
  const [checkOutDate, getCheckOutDate] = useState('Check-out');
  const setCheckInDateFirstBlock = (value) => {
    getCheckInDateFirstBlock(value);
  };
  const setCheckInDateSecondBlock = (value) => {
    getCheckInDateSecondBlock(value);
  };
  const setCheckOutDate = (value) => {
    getCheckOutDate(value);
  };
  useEffect(() => {
    props.setCheckInDateFirstBlock(checkInDateFirstBlock);
    props.setCheckInDateSecondBlock(checkInDateSecondBlock);
    props.setCheckOutDate(checkOutDate);
  });

  const [backArrowCalendar, setBackArrowCalendar] = useState(false);
  const calendarSliderNext = () => {
    if (counter !== 8) {
      if (currentMonth === 11) {
        setMonthCounter(new Date().getMonth() * -1);
        setYearCounter(1);
      } else {
        setMonthCounter(monthCounter + 1);
        counter += 1;
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
        counter -= 1;
      }
      if (counter === -1) {
        setBackArrowCalendar(false);
      }
    }
  };
  return (
    <div className="calendar">
      <div role="presentation" className="arrow_for_calendar_next" onClick={calendarSliderNext} />
      {backArrowCalendar && (
        <div role="presentation" className="arrow_for_calendar_back" onClick={calendarSliderBack} />
      )}
      <div id="firstMonth" className="monthCalendar">
        <div className="monthTitle">
          <div className="nameOfMonth">{`${listOfMonths[currentMonth]} ${currentMonthYear}`}</div>
          <div className="daysOfWeek">
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
            <div>Su</div>
          </div>
        </div>
        <GetCalendarMonth
          setCheckInDateFirstBlock={setCheckInDateFirstBlock}
          setCheckOutDate={setCheckOutDate}
          block="first"
          month={currentMonth}
          dayOfWeek={firstMonthDayOfWeek}
          listOfDays={listOfDays}
          listOfMonths={listOfMonths}
          setStateForCalendar={props.setStateForCalendar}
        />
      </div>
      <div id="nextMonth" className="monthCalendar">
        <div className="monthTitle">
          <div className="nameOfMonth">{`${listOfMonths[nextMonth]} ${nextMonthYear}`}</div>
          <div className="daysOfWeek">
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
            <div>Su</div>
          </div>
        </div>
        <GetCalendarMonth
          checkInDateFromTheFirstBlock={checkInDateFirstBlock}
          setCheckInDateFirstBlock={setCheckInDateFirstBlock}
          setCheckInDateSecondBlock={setCheckInDateSecondBlock}
          setCheckOutDate={setCheckOutDate}
          block="second"
          month={nextMonth}
          dayOfWeek={nextMonthDayOfWeek}
          listOfDays={listOfDays}
          listOfMonths={listOfMonths}
          setStateForCalendar={props.setStateForCalendar}
        />
      </div>
    </div>
  );
}

export default Calendar;
