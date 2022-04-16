import React from 'react';

function BookingDateCard(props) {
  const { checkInValue, checkOutValue } = props;
  return (
    <div>
      {checkInValue || checkOutValue}
    </div>
  );
}

export default BookingDateCard;
