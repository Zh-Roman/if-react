import React, { useState } from 'react';
import './TopSectionForm.css';
import SearchDestinationInput from './searchDestinationInput/SearchDestinationInput';
import TopSectionFormButton from './topSectionFormButton/TopSectionFormButton';
import BookingPeriod from './bookingPeriod/BookingPeriod';
import SearchConditions from './seacrhConditions/SearchConditions';

function TopSectionForm(props) {
  const [valueForSubmit, setValueForSubmit] = useState('');
  return (
    <form
      className="top_section_form"
      action="#"
      method="get"
      autoComplete="off"
      onSubmit={(event) => {
        event.preventDefault();
        props.getValueFromInput(valueForSubmit);
      }}
    >
      <SearchDestinationInput setValueForSubmit={setValueForSubmit} />
      <BookingPeriod />
      <SearchConditions />
      <TopSectionFormButton />
    </form>
  );
}
export default TopSectionForm;
