import React, { useState } from 'react';
import './TopSectionForm.css';
import { useDispatch, useSelector } from 'react-redux';
import SearchDestinationInput from './searchDestinationInput/SearchDestinationInput';
import TopSectionFormButton from './topSectionFormButton/TopSectionFormButton';
import BookingPeriod from './bookingPeriod/BookingPeriod';
import SearchConditions from './seacrhConditions/SearchConditions';
import { getUserQueryRequested } from '../../ducks/userQuery/actions';
import {
  adultsValueSelector,
  childrenValueSelector, dateFromValueSelector, dateToValueSelector, roomsValueSelector,
  searchValueSelector,
} from '../../ducks/queryUrlComponents/selectors';

const basicUrlForSearch = 'https://fe-student-api.herokuapp.com/api/hotels';

function TopSectionForm() {
  const [valueForSubmit, setValueForSubmit] = useState('');
  const [adultsValue, setAdultsValue] = useState('');
  const [childrenValue, setChildrenValue] = useState('');
  const [roomsValue, setRoomsValues] = useState('');
  const [dateFromValue, setDateFromValue] = useState('');
  const [dateToValue, setDateToValue] = useState('');
  const searchValueUrl = useSelector(searchValueSelector);
  const adultsValueUrl = useSelector(adultsValueSelector);
  const childrenValueUrl = useSelector(childrenValueSelector);
  const roomsValueUrl = useSelector(roomsValueSelector);
  const dateFromValueUrl = useSelector(dateFromValueSelector);
  const dateToValueUrl = useSelector(dateToValueSelector);
  const urlForRequest = `${basicUrlForSearch}?search=${searchValueUrl}&dateFrom=${dateFromValueUrl}&dateTo=${dateToValueUrl}&adults=${adultsValueUrl}&children=${childrenValueUrl}&rooms=${roomsValueUrl}`;
  const dispatch = useDispatch();
  return (
    <form
      className="top_section_form"
      action="#"
      method="get"
      autoComplete="off"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(getUserQueryRequested(urlForRequest));
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
    </form>
  );
}
export default TopSectionForm;
