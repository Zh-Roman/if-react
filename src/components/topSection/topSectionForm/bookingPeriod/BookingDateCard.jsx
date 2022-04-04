import React from 'react';
import './BookingDateCard.css';

function BookingDateCard(props) {
  const { checkInValue, checkOutValue } = props;
  return (
    <div className="booking_date_card">
      {checkInValue || checkOutValue}
    </div>
  );
}

export default BookingDateCard;
