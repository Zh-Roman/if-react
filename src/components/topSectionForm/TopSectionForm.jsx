import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchDestinationInput from './searchDestinationInput/SearchDestinationInput';
import TopSectionFormButton from './topSectionFormButton/TopSectionFormButton';
import BookingPeriod from './bookingPeriod/BookingPeriod';
import SearchConditions from './seacrhConditions/SearchConditions';
import { getUserQueryRequested } from '../../ducks/userQuery/actions';
import StyleTopSectionForm from './StyleTopSectionForm';

function TopSectionForm() {
  const [valueForSubmit, setValueForSubmit] = useState('');
  const [adultsValue, setAdultsValue] = useState('');
  const [childrenValue, setChildrenValue] = useState('');
  const [roomsValue, setRoomsValues] = useState('');
  const [dateFromValue, setDateFromValue] = useState('');
  const [dateToValue, setDateToValue] = useState('');
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
      <SearchDestinationInput
        setValueForSubmit={setValueForSubmit}
      />
      <BookingPeriod
        setDateFromValue={setDateFromValue}
        setDateToValue={setDateToValue}
      />
      <SearchConditions
        setAdultsValue={setAdultsValue}
        setChildrenValue={setChildrenValue}
        setRoomsValues={setRoomsValues}
      />
      <TopSectionFormButton
        searchValue={valueForSubmit}
        adultsValue={adultsValue}
        childrenValue={childrenValue}
        roomsValue={roomsValue}
        dateFromValue={dateFromValue}
        dateToValue={dateToValue}
      />
    </StyleTopSectionForm>
  );
}

export default TopSectionForm;
