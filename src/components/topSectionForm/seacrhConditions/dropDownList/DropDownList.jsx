import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  DropDownListOfSelects,
  DropDownListTitle,
  DropDownOption,
  DropDownSelect,
  StyleDropDownList,
} from './StyleDropDownList';
import FormContext from '../../../../context/TopSectionFormContext';

const DropDownListGridColumn = styled.div`
  @media screen and (min-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 4;
  }
`;

function DropDownList(props) {
  const [selectValue, setSelectValue] = useState({});
  const {
    childrenValue, setChildrenAgeValue,
  } = useContext(FormContext);
  const handleChange = (e) => {
    if (e.target.value !== 'Indicate age') {
      setSelectValue({ ...selectValue, [e.target.id]: e.target.value });
    }
  };
  useEffect(() => {
    setChildrenAgeValue(Object.values(selectValue).join(','));
  }, [selectValue]);
  return (
    <DropDownListGridColumn>
      {childrenValue > 0 && (
        <StyleDropDownList>
          <DropDownListTitle>What is the age of the child you’re travelling with?</DropDownListTitle>
          <DropDownListOfSelects>
            {props.childrenAgeOptionsList.map(
              (select) => (
                <DropDownSelect id={select.id} key={select.key} onChange={handleChange}>
                  {props.ageOptions.map(
                    (option) => (
                      <DropDownOption key={option.value} value={option.value}>{option.label}</DropDownOption>),
                  )}
                </DropDownSelect>
              ),
            )}
          </DropDownListOfSelects>
        </StyleDropDownList>
      )}
    </DropDownListGridColumn>
  );
}

DropDownList.propTypes = {
  childrenAgeOptionsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    key: PropTypes.string,
  })),
  ageOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
};
export default DropDownList;
