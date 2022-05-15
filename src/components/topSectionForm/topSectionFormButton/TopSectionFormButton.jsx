import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  getAdultsValue,
  getChildrenValue, getDateFromValue, getDateToValue,
  getRoomsValue,
  getSearchValue,
} from '../../../ducks/queryUrlComponents/actions';

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
    <StyleTopSectionFormButton
      className="top_section_button"
      type="submit"
      onClick={handleClick}
    >
      Search
    </StyleTopSectionFormButton>
  );
}

TopSectionFormButton.propTypes = {
  searchValue: PropTypes.string.isRequired,
  adultsValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  childrenValue: PropTypes.string.isRequired,
  roomsValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  dateFromValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  dateToValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default TopSectionFormButton;
