import React, { useState } from 'react';
import GetCalendarMonth from './GetCalendarMonth';
import './Calendar.css';

function Calendar() {
  const listOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const listOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentMonth = new Date().getMonth();
  let nextMonth;
  const currentMonthYear = new Date().getFullYear();
  let nextMonthYear;
  if (currentMonthYear % 4 === 0) {
    listOfDays.splice(1, 1, 29);
  }
  if (currentMonth === 12) {
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
  const [checkInDate, getCheckInDate] = useState('');
  const [checkOutDate, getCheckOutDate] = useState('');
  const setCheckInDate = (value) => {
    getCheckInDate(value);
  };
  const setCheckOutDate = (value) => {
    getCheckOutDate(value);
  };
  return (
    <div className="calendar">
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
          setCheckInDate={setCheckInDate}
          setCheckOutDate={setCheckOutDate}
          block="first"
          month={currentMonth}
          dayOfWeek={firstMonthDayOfWeek}
          listOfDays={listOfDays}
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
          block="second"
          month={nextMonth}
          dayOfWeek={nextMonthDayOfWeek}
          listOfDays={listOfDays}
        />
      </div>
      <div>{checkInDate}</div>
      <div>{checkOutDate}</div>
    </div>
  );
}

export default Calendar;
