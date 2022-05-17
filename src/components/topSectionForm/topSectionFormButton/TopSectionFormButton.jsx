import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  getAdultsValue,
  getChildrenValue, getDateFromValue, getDateToValue,
  getRoomsValue,
  getSearchValue,
} from '../../../ducks/queryUrlComponents/actions';
import FormContext from '../../../context/TopSectionFormContext';

export const StyleTopSectionFormButton = styled.button`
  height: 64px;
  min-width: 192px;
  background-color: ${(props) => props.theme.colors.primaryAccent};
  border-radius: 8px;
  border: 3px ${(props) => props.theme.colors.primaryAccent} solid;
  margin: -3px -3px -3px 0;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.primaryMain};
  padding: 12px;

  & span {
    font-size: 24px;
    line-height: 28px;
    color: ${(props) => props.theme.colors.primaryMain};
  }

  &:hover {
    box-shadow: 0 0 10px 0 ${(props) => props.theme.colors.primaryAccent} inset, 0 0 10px 4px ${(props) => props.theme.colors.primaryAccent};
  }
`;

function TopSectionFormButton() {
  const {
    searchRequestValue, adultsValue, childrenAgeValue, roomsValue, dateFromValue, dateToValue,
  } = useContext(FormContext);

  const dispatch = useDispatch();
  const handleSubmitClick = () => {
    dispatch(getSearchValue(searchRequestValue));
    dispatch(getAdultsValue(adultsValue));
    dispatch(getChildrenValue(childrenAgeValue));
    dispatch(getRoomsValue(roomsValue));
    dispatch(getDateFromValue(new Date(dateFromValue).getTime()));
    dispatch(getDateToValue(new Date(dateToValue).getTime()));
  };
  return (
    <StyleTopSectionFormButton
      className="top_section_button"
      type="submit"
      onClick={handleSubmitClick}
    >
      Search
    </StyleTopSectionFormButton>
  );
}
export default TopSectionFormButton;
