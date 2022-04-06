import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import './BookingPeriod.css';
import BookingDateCard from './BookingDateCard';
import Calendar from '../topSectionCalendar/Calendar';

const checkInValue = ['Check-in'];
const checkOutValue = ['Check-out'];
function BookingPeriod() {
  const [checkInDateFirstBlock, getCheckInDateFirstBlock] = useState('');
  const [checkInDateSecondBlock, getCheckInDateSecondBlock] = useState('');
  const [checkOutDate, getCheckOutDate] = useState('');
  const [stateForCalendar, setStateForCalendar] = useState(false);
  const bookingPeriodValue = (partOfPeriod, valueFromCalendar) => {
    if (partOfPeriod[partOfPeriod.length - 1] !== valueFromCalendar && valueFromCalendar !== '') {
      partOfPeriod.push(valueFromCalendar);
    }
  };
  bookingPeriodValue(checkInValue, checkInDateFirstBlock);
  bookingPeriodValue(checkInValue, checkInDateSecondBlock);
  bookingPeriodValue(checkOutValue, checkOutDate);

  return (
    <div className={`booking_period ${stateForCalendar && 'color_frame'}`}>
      <div role="presentation" className="search_dates" onClick={() => setStateForCalendar(!stateForCalendar)}>
        <BookingDateCard
          checkInValue={checkInValue[checkInValue.length - 1]}
        />
        <span>&nbsp;—&nbsp;</span>
        <BookingDateCard
          checkOutValue={checkOutValue[checkOutValue.length - 1]}
        />
      </div>
      <Transition
        in={stateForCalendar}
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        {((state) => (
          <Calendar
            checkInDateFirstBlock={checkInDateFirstBlock}
            checkInDateSecondBlock={checkInDateSecondBlock}
            checkOutDate={checkOutDate}
            calendarClassName={`calendar ${state}`}
            getCheckInDateFirstBlock={getCheckInDateFirstBlock}
            getCheckInDateSecondBlock={getCheckInDateSecondBlock}
            getCheckOutDate={getCheckOutDate}
            setStateForCalendar={setStateForCalendar}
          />
        ))}

      </Transition>
    </div>
  );
}

export default BookingPeriod;
