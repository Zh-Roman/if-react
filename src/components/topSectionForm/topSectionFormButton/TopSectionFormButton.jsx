import React from 'react';
import './TopSectionFormButton.css';
import { useDispatch } from 'react-redux';
import {
  getAdultsValue,
  getChildrenValue, getDateFromValue, getDateToValue,
  getRoomsValue,
  getSearchValue,
} from '../../../ducks/queryUrlComponents/actions';

function TopSectionFormButton(props) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getSearchValue(props.searchValue));
    dispatch(getAdultsValue(props.adultsValue));
    dispatch(getChildrenValue(props.childrenValue));
    dispatch(getRoomsValue(props.roomsValue));
    dispatch(getDateFromValue(props.dateFromValue));
    dispatch(getDateToValue(props.dateToValue));
  };
  return (
    <button className="top_section_button" type="submit" onClick={handleClick}>Search</button>
  );
}

export default TopSectionFormButton;
