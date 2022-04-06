import React, { useState } from 'react';
import './GetCalendarMonth.css';

function GetCalendarMonth(props) {
  const daysInWeek = 7;
  let daysInMonth = props.listOfDays[props.month];
  const arrayOfNumbers = [];
  let notThisMonthStart = 0;
  let notThisMonthEnd = 0;
  for (let i = 1; i <= daysInMonth; i += 1) {
    arrayOfNumbers.push(i);
  }
  let previousMonthDays = props.listOfDays[props.month - 1];
  if (props.month === 0) {
    previousMonthDays = 31;
  }
  for (let day = previousMonthDays, i = 0; i < props.dayOfWeek; i += 1, day -= 1, daysInMonth += 1) {
    arrayOfNumbers.unshift(day);
    notThisMonthStart = i;
  }
  for (let day = 1, i = 0; daysInMonth % daysInWeek !== 0; day += 1, daysInMonth += 1, i += 1) {
    arrayOfNumbers.push(day);
    notThisMonthEnd = day;
  }
  const keys = [];
  for (let i = 1; i <= arrayOfNumbers.length; i += 1) {
    keys.push(i);
  }
  const arrayOfObj = arrayOfNumbers.map((dayOfMonth) => ({ dayOfMonth }));
  const keysForObject = keys.map((key) => ({ key }));
  for (let i = 0; i < arrayOfObj.length; i += 1) {
    Object.assign(arrayOfObj[i], keysForObject[i]);
  }
  let currentDayKey;
  for (let i = 0; i < arrayOfNumbers.length; i += 1, notThisMonthStart -= 1) {
    if (notThisMonthStart >= 0 || i >= arrayOfNumbers.length - notThisMonthEnd) {
      arrayOfObj[i].currentMonth = 'currentMonthFalse';
    } else {
      arrayOfObj[i].currentMonth = 'currentMonthTrue';
    }
    if (props.month === new Date().getMonth()) {
      if (arrayOfObj[i].dayOfMonth === new Date().getDate() && arrayOfObj[i].currentMonth === 'currentMonthTrue') {
        arrayOfObj[i].currentDay = 'currentDayTrue';
        currentDayKey = arrayOfObj[i].key;
      } else {
        arrayOfObj[i].currentDay = 'currentDayFalse';
      }
      if (arrayOfObj[i].dayOfMonth < new Date().getDate() && arrayOfObj[i].currentMonth === 'currentMonthTrue') {
        arrayOfObj[i].previousDays = 'currentMonthPreviousDaysTrue';
      } else {
        arrayOfObj[i].previousDays = 'currentMonthPreviousDaysFalse';
      }
    }
  }
  if (arrayOfObj[0].dayOfMonth === 1) {
    delete arrayOfObj[0].currentMonth;
  }
  const [checkingPeriod, setCheckingPeriod] = useState({
    checkInDate: '',
    checkOutDate: '',
  });

  const handleClick = (e) => {
    const { id, value, className } = e.currentTarget;
    const getCheckingPeriod = (setCheckInDate) => {
      if (checkingPeriod.checkInDate !== '' && checkingPeriod.checkOutDate !== '') {
        checkingPeriod.checkInDate = '';
        checkingPeriod.checkOutDate = '';
      }
      if (checkingPeriod.checkInDate === '') {
        setCheckInDate(`${value} ${props.listOfMonths[props.month]}`);
        setCheckingPeriod({
          checkInDate: id,
          checkOutDate: '',
        });
      }
      if (checkingPeriod.checkInDate !== '') {
        if (Number(id) > Number(checkingPeriod.checkInDate)) {
          props.getCheckOutDate(`${e.currentTarget.value} ${props.listOfMonths[props.month]}`);
          props.getCheckInDateFirstBlock('');
          setTimeout(props.setStateForCalendar(false), 500);
          props.setCounter(-1);
        }
        setCheckingPeriod({
          checkInDate: checkingPeriod.checkInDate,
          checkOutDate: id,
        });
      }
    };
    if (!(className.includes('currentMonthFalse') || className.includes('currentMonthPreviousDaysTrue'))) {
      if (props.block === 'first') {
        getCheckingPeriod(props.getCheckInDateFirstBlock);
      } else if (props.checkInDateFromTheFirstBlock === '') {
        getCheckingPeriod(props.getCheckInDateSecondBlock);
      } else {
        props.getCheckOutDate(`${e.currentTarget.value} ${props.listOfMonths[props.month]}`);
        props.getCheckInDateFirstBlock('');
        setTimeout(props.setStateForCalendar(false), 500);
        props.setCounter(-1);
        setCheckingPeriod({
          checkInDate: checkingPeriod.checkInDate,
          checkOutDate: id,
        });
      }
    }
  };
  const checkingState = (arrayItem) => {
    let checkInDay = '';
    let checkOutDay = '';
    let firstDayOfMonth = '';
    if (arrayItem.key.toString() === checkingPeriod.checkInDate && checkInDay === '') {
      if (arrayItem.key >= currentDayKey) {
        checkInDay = 'checkInDay';
      } else if (currentDayKey === undefined) {
        checkInDay = 'checkInDay';
      }
      if (props.block === 'second') {
        checkInDay = 'checkInDay';
      }
    }
    if (arrayItem.key.toString() === checkingPeriod.checkOutDate
      && Number(checkingPeriod.checkOutDate) > Number(checkingPeriod.checkInDate)) {
      checkOutDay = 'checkOutDay';
    }
    if (props.block === 'second' && arrayItem.dayOfMonth === 1
      && checkingPeriod.checkOutDate !== '' && checkingPeriod.checkInDate === '') {
      firstDayOfMonth = 'firstDayOfMonth';
    }
    return {
      checkInDay,
      checkOutDay,
      firstDayOfMonth,
    };
  };
  return (
    <ul className="monthBody">
      {arrayOfObj.map((day) => (
        <li
          role="presentation"
          value={day.dayOfMonth}
          key={day.key}
          id={day.key}
          onClick={handleClick}
          className={`
          ${day.currentMonth} 
          ${day.currentDay} 
          ${day.previousDays} 
          ${checkingState(day).checkInDay}
          ${checkingState(day).checkOutDay}
          ${checkingState(day).firstDayOfMonth}
          `}
        >
          {day.dayOfMonth}
        </li>
      ))}
    </ul>
  );
}

export default GetCalendarMonth;
