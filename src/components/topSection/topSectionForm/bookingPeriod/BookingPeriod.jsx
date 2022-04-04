import React, { useState } from 'react';
import './BookingPeriod.css';
import BookingDateCard from './BookingDateCard';
import Calendar from '../topSectionCalendar/Calendar';

const checkInValue = ['Check-in'];
const checkOutValue = ['Check-out'];
function BookingPeriod() {
  const [checkInDateFirstBlock, getCheckInDateFirstBlock] = useState('Check-in');
  const [checkInDateSecondBlock, getCheckInDateSecondBlock] = useState('Check-in');
  const [checkOutDate, getCheckOutDate] = useState('Check-out');
  const [stateForCalendar, setStateForCalendar] = useState(false);
  const setCheckInDateFirstBlock = (value) => {
    getCheckInDateFirstBlock(value);
  };
  const setCheckInDateSecondBlock = (value) => {
    getCheckInDateSecondBlock(value);
  };
  const setCheckOutDate = (value) => {
    getCheckOutDate(value);
  };
  const openCalendar = () => {
    setStateForCalendar(true);
  };
  if (checkInValue[checkInValue.length - 1] !== checkInDateFirstBlock
    && checkInDateFirstBlock !== 'Check-in') {
    checkInValue.push(checkInDateFirstBlock);
  }
  if (checkInValue[checkInValue.length - 1] !== checkInDateSecondBlock
    && checkInDateSecondBlock !== 'Check-in') {
    checkInValue.push(checkInDateSecondBlock);
  }
  if (checkOutValue[checkOutValue.length - 1] !== checkOutDate
    && checkOutDate !== 'Check-out') {
    checkOutValue.push(checkOutDate);
  }
  return (
    <div className={`booking_period ${stateForCalendar && 'color_frame'}`}>
      <div role="presentation" className="search_dates" onClick={openCalendar}>
        <BookingDateCard
          checkInValue={checkInValue[checkInValue.length - 1]}
        />
        <span>&nbsp;—&nbsp;</span>
        <BookingDateCard
          checkOutValue={checkOutValue[checkOutValue.length - 1]}
        />
      </div>
      {stateForCalendar && (
      <Calendar
        setCheckInDateFirstBlock={setCheckInDateFirstBlock}
        setCheckInDateSecondBlock={setCheckInDateSecondBlock}
        setCheckOutDate={setCheckOutDate}
        setStateForCalendar={setStateForCalendar}
      />
      )}

    </div>
  );
}

export default BookingPeriod;
