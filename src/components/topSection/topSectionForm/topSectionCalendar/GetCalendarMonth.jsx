import React, { useState } from 'react';
import './GetCalendarMonth.css';

function GetCalendarMonth(props) {
  const {
    block, month, listOfDays, dayOfWeek, setCheckInDate, setCheckOutDate,
  } = props;
  const daysInWeek = 7;
  let daysInMonth = listOfDays[month];
  const arrayOfNumbers = [];
  let notThisMonthStart = 0;
  let notThisMonthEnd = 0;
  for (let i = 1; i <= daysInMonth; i += 1) {
    arrayOfNumbers.push(i);
  }
  let previousMonthDays = listOfDays[month - 1];
  if (month === 0) {
    previousMonthDays = 31;
  }
  for (let day = previousMonthDays, i = 0; i < dayOfWeek; i += 1, day -= 1, daysInMonth += 1) {
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
  const notCurrentMonthTrue = {
    notCurrentMonth: 'notCurrentMonthTrue',
  };
  const notCurrentMonthFalse = {
    notCurrentMonth: 'notCurrentMonthFalse',
  };
  const currentDayTrue = {
    currentDay: 'currentDayTrue',
  };
  const currentDayFalse = {
    currentDay: 'currentDayFalse',
  };
  const currentMonthPreviousDaysTrue = {
    previousDays: 'currentMonthPreviousDaysTrue',
  };
  const currentMonthPreviousDaysFalse = {
    previousDays: 'currentMonthPreviousDaysFalse',
  };
  let currentDayKey;
  for (let i = 0; i < arrayOfNumbers.length; i += 1, notThisMonthStart -= 1) {
    if (notThisMonthStart >= 0 || i >= arrayOfNumbers.length - notThisMonthEnd) {
      Object.assign(arrayOfObj[i], notCurrentMonthTrue);
    } else {
      Object.assign(arrayOfObj[i], notCurrentMonthFalse);
    }
    if (month === new Date().getMonth()) {
      if (arrayOfObj[i].dayOfMonth === new Date().getDate() && arrayOfObj[i].notCurrentMonth === 'notCurrentMonthFalse') {
        Object.assign(arrayOfObj[i], currentDayTrue);
        currentDayKey = arrayOfObj[i].key;
      } else {
        Object.assign(arrayOfObj[i], currentDayFalse);
      }
      if (arrayOfObj[i].dayOfMonth < new Date().getDate() && arrayOfObj[i].notCurrentMonth === 'notCurrentMonthFalse') {
        Object.assign(arrayOfObj[i], currentMonthPreviousDaysTrue);
      } else {
        Object.assign(arrayOfObj[i], currentMonthPreviousDaysFalse);
      }
    }
  }
  if (arrayOfObj[0].dayOfMonth === 1) {
    delete arrayOfObj[0].notCurrentMonth;
  }
  const [checkingPeriod, setCheckingPeriod] = useState({
    checkInDate: '',
    checkOutDate: '',
  });
  const handleClick = (e) => {
    const { id } = e.currentTarget;
    if (checkingPeriod.checkInDate === '') {
      setCheckInDate(e.currentTarget.value);
      setCheckingPeriod({
        checkInDate: id,
        checkOutDate: '',
      });
    }
    if (checkingPeriod.checkInDate !== '') {
      setCheckOutDate(e.currentTarget.value);
      setCheckingPeriod({
        checkInDate: checkingPeriod.checkInDate,
        checkOutDate: id,
      });
    }
  };
  const checkingState = (arrayItem) => {
    let checkInDay = '';
    let checkOutDay = '';
    if (arrayItem.key.toString() === checkingPeriod.checkInDate && checkInDay === '') {
      if (block === 'first') {
        if (arrayItem.key >= currentDayKey) {
          checkInDay = 'checkInDay';
        }
      } else {
        checkInDay = 'checkInDay';
      }
    }
    if (arrayItem.key.toString() === checkingPeriod.checkOutDate
      && Number(checkingPeriod.checkOutDate) > Number(checkingPeriod.checkInDate)) {
      checkOutDay = 'checkOutDay';
    }
    return {
      checkInDay,
      checkOutDay,
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
          ${day.notCurrentMonth} 
          ${day.currentDay} 
          ${day.previousDays} 
          ${checkingState(day).checkInDay}
          ${checkingState(day).checkOutDay}
          `}
        >
          {day.dayOfMonth}
        </li>
      ))}
    </ul>
  );
}

export default GetCalendarMonth;
