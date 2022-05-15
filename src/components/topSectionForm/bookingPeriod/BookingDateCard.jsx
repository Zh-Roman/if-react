import React from 'react';
import PropTypes from 'prop-types';

function BookingDateCard(props) {
  const { checkInValue, checkOutValue } = props;
  return (
    <div>
      {checkInValue || checkOutValue}
    </div>
  );
}

BookingDateCard.propTypes = {
  checkInValue: PropTypes.string,
  checkOutValue: PropTypes.string,
};
export default BookingDateCard;
