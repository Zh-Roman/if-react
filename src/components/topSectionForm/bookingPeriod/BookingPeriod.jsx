import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import ClickAwayListener from 'react-click-away-listener';
import BookingDateCard from './BookingDateCard';
import Calendar from '../topSectionCalendar/Calendar';
import { NightStayAmount, SearchDates, StyleBookingPeriod } from './StyleBookingPeriod';

const checkInValue = ['Check-in'];
const checkOutValue = ['Check-out'];

function BookingPeriod(props) {
  const [checkInDateFirstBlock, getCheckInDateFirstBlock] = useState('');
  const [checkInDateSecondBlock, getCheckInDateSecondBlock] = useState('');
  const [checkOutDate, getCheckOutDate] = useState('');
  const [checkOutDateBlock, setCheckOutDateBlock] = useState('');
  const [currentMonthYear, setCurrentMonthYear] = useState('');
  const [nextMonthYear, setNextMonthYear] = useState('');
  const [stateForCalendar, setStateForCalendar] = useState(false);
  const bookingPeriodValue = (partOfPeriod, valueFromCalendar) => {
    if (partOfPeriod[partOfPeriod.length - 1] !== valueFromCalendar && valueFromCalendar !== '') {
      partOfPeriod.push(valueFromCalendar);
    }
  };
  bookingPeriodValue(checkInValue, checkInDateFirstBlock);
  bookingPeriodValue(checkInValue, checkInDateSecondBlock);
  bookingPeriodValue(checkOutValue, checkOutDate);
  const nightStay = (checkIn, checkOut) => {
    let start;
    let end;
    if (checkInDateSecondBlock) {
      start = new Date(`${checkIn}, ${nextMonthYear}`);
    } else {
      start = new Date(`${checkIn}, ${currentMonthYear}`);
    }
    if (checkOutDateBlock === 'first') {
      end = new Date(`${checkOut}, ${currentMonthYear}`);
    } else {
      end = new Date(`${checkOut}, ${nextMonthYear}`);
    }
    let nightCount = 0;
    while (end > start) {
      nightCount += 1;
      start.setDate(start.getDate() + 1);
    }
    return nightCount;
  };
  const dateFromWithoutYear = checkInValue[checkInValue.length - 1];
  const dateToWithoutYear = checkOutValue[checkOutValue.length - 1];
  useEffect(() => {
    let dateFrom;
    let dateTo;
    if (checkInDateSecondBlock) {
      dateFrom = new Date(`${dateFromWithoutYear}, ${nextMonthYear}`).getTime();
    } else {
      dateFrom = new Date(`${dateFromWithoutYear}, ${currentMonthYear}`).getTime();
    }
    if (checkOutDateBlock === 'first') {
      dateTo = new Date(`${dateToWithoutYear}, ${currentMonthYear}`).getTime();
    } else {
      dateTo = new Date(`${dateToWithoutYear}, ${nextMonthYear}`).getTime();
    }
    props.setDateFromValue(dateFrom);
    props.setDateToValue(dateTo);
  }, [dateFromWithoutYear, dateToWithoutYear]);
  return (
    <StyleBookingPeriod
      stateForCalendar={!stateForCalendar
        ? 'border-left: 1px #3077c685 solid; border-right: 1px #3077c685 solid;'
        : 'border: 3px #F5BD41 solid;margin: -3px 0;border-radius: 8px;'}
    >
      <SearchDates role="presentation" onClick={() => setStateForCalendar(!stateForCalendar)}>
        <BookingDateCard
          checkInValue={checkInValue[checkInValue.length - 1]}
        />
        <span>&nbsp;—&nbsp;</span>
        <BookingDateCard
          checkOutValue={checkOutValue[checkOutValue.length - 1]}
        />
      </SearchDates>
      {checkOutValue[checkOutValue.length - 1] !== 'Check-out' && (
        <NightStayAmount>
          {`${nightStay(checkInValue[checkInValue.length - 1], checkOutValue[checkOutValue.length - 1])}
          - night stay`}
        </NightStayAmount>
      )}
      <Transition
        in={stateForCalendar}
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        {((state) => (
          <ClickAwayListener onClickAway={() => setStateForCalendar(false)}>
            <div>
              <Calendar
                setCurrentMonthYear={setCurrentMonthYear}
                setNextMonthYear={setNextMonthYear}
                setCheckOutDateBlock={setCheckOutDateBlock}
                checkInDateFirstBlock={checkInDateFirstBlock}
                checkInDateSecondBlock={checkInDateSecondBlock}
                checkOutDate={checkOutDate}
                calendarClassName={`${state}`}
                getCheckInDateFirstBlock={getCheckInDateFirstBlock}
                getCheckInDateSecondBlock={getCheckInDateSecondBlock}
                getCheckOutDate={getCheckOutDate}
                setStateForCalendar={setStateForCalendar}
              />
            </div>
          </ClickAwayListener>
        ))}
      </Transition>
    </StyleBookingPeriod>
  );
}

BookingPeriod.propTypes = {
  setDateFromValue: PropTypes.func.isRequired,
  setDateToValue: PropTypes.func.isRequired,
};
export default BookingPeriod;
