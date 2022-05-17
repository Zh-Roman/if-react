import React, { useContext, useState } from 'react';
import { Transition } from 'react-transition-group';
import ClickAwayListener from 'react-click-away-listener';
import BookingDateCard from './BookingDateCard';
import Calendar from '../topSectionCalendar/Calendar';
import { NightStayAmount, SearchDates, StyleBookingPeriod } from './StyleBookingPeriod';
import FormContext from '../../../context/TopSectionFormContext';

function BookingPeriod() {
  const {
    dateFromValue,
    dateToValue,
  } = useContext(FormContext);
  const [stateForCalendar, setStateForCalendar] = useState(false);
  const nightStay = () => {
    const start = new Date(dateFromValue);
    const end = new Date(dateToValue);
    let nightCount = 0;
    while (end > start) {
      nightCount += 1;
      start.setDate(start.getDate() + 1);
    }
    return nightCount;
  };
  nightStay();
  return (
    <StyleBookingPeriod
      stateForCalendar={!stateForCalendar
        ? 'border-left: 1px #3077c685 solid; border-right: 1px #3077c685 solid;'
        : 'border: 3px #F5BD41 solid;margin: -3px 0;border-radius: 8px;'}
    >
      <SearchDates role="presentation" onClick={() => setStateForCalendar(!stateForCalendar)}>
        <BookingDateCard
          bookingDate={dateFromValue.replace(/(\s\d{4})/, '')}
        />
        <span>&nbsp;—&nbsp;</span>
        <BookingDateCard
          bookingDate={dateToValue.replace(/(\s\d{4})/, '')}
        />
      </SearchDates>
      {dateToValue !== 'Check-out' && (
      <NightStayAmount>
        {`${nightStay()} 
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
                calendarClassName={`${state}`}
                setStateForCalendar={setStateForCalendar}
              />
            </div>
          </ClickAwayListener>
        ))}
      </Transition>
    </StyleBookingPeriod>
  );
}
export default BookingPeriod;
