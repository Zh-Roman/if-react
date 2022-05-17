import React from 'react';
import { useDispatch } from 'react-redux';
import SearchDestinationInput from './searchDestinationInput/SearchDestinationInput';
import TopSectionFormButton from './topSectionFormButton/TopSectionFormButton';
import BookingPeriod from './bookingPeriod/BookingPeriod';
import SearchConditions from './seacrhConditions/SearchConditions';
import { getUserQueryRequested } from '../../ducks/userQuery/actions';
import StyleTopSectionForm from './StyleTopSectionForm';

function TopSectionForm() {
  const dispatch = useDispatch();
  return (
    <StyleTopSectionForm
      action="#"
      method="get"
      autoComplete="off"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(getUserQueryRequested());
      }}
    >
      <SearchDestinationInput />
      <BookingPeriod />
      <SearchConditions />
      <TopSectionFormButton />
    </StyleTopSectionForm>
  );
}

export default TopSectionForm;
