import React from 'react';
import PropTypes from 'prop-types';

function BookingDateCard(props) {
  const { bookingDate } = props;
  return (
    <div>
      {bookingDate}
    </div>
  );
}

BookingDateCard.propTypes = {
  bookingDate: PropTypes.string,
};
export default BookingDateCard;
