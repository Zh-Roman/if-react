import React, { useContext, useState } from 'react';
import { Transition } from 'react-transition-group';
import ClickAwayListener from 'react-click-away-listener';
import FormContext from '../../../context/TopSectionFormContext';
import ConditionValue from './conditionValue/ConditionValue';
import ConditionFilter from './conditionFilter/ConditionFilter';
import DropDownList from './dropDownList/DropDownList';
import { ConditionFilters, ConditionValues, StyleSearchConditions } from './StyleSearchConditions';

function SearchConditions() {
  const minChildrenValueForRequest = 0;
  const minOtherValueForRequest = 1;
  const maxChildrenValue = 10;
  const maxOtherValue = 30;
  const ageOptions = [{
    value: 'Indicate age',
    label: 'Indicate age',
  }];
  for (let i = 0; i <= 17; i += 1) {
    const option = {
      value: `${i}`,
      label: `${i} years old`,
    };
    ageOptions.push(option);
  }
  const [childrenAgeOptionsList, setChildrenAgeOptionList] = useState([]);
  const [stateForFilter, setStateForFilter] = useState(false);
  const {
    adultsValue, setAdultsValue, setChildrenValue, childrenValue, roomsValue, setRoomsValues,
  } = useContext(FormContext);
  return (
    <StyleSearchConditions
      stateForFilter={stateForFilter ? 'border: 3px #F5BD41 solid; margin: -3px 0 -3px -1px;' : null}
    >
      {' '}
      <ConditionValues role="presentation" onClick={() => setStateForFilter(!stateForFilter)}>
        <ConditionValue
          conditionValue={adultsValue}
          conditionTitle={adultsValue === 1 ? 'Adult' : 'Adults'}
        />
        <span>&nbsp;—&nbsp;</span>
        <ConditionValue
          conditionValue={childrenValue}
          conditionTitle={childrenValue === 1 ? 'Child' : 'Children'}
        />
        <span>&nbsp;—&nbsp;</span>
        <ConditionValue
          conditionValue={roomsValue}
          conditionTitle={roomsValue === 1 ? 'Room' : 'Rooms'}
        />
      </ConditionValues>
      <Transition
        in={stateForFilter}
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        {((state) => (
          <ClickAwayListener onClickAway={() => setStateForFilter(false)}>
            <ConditionFilters className={`${state}`}>
              <ConditionFilter
                minValue={minOtherValueForRequest}
                maxValue={maxOtherValue}
                conditionValue={adultsValue}
                setValue={setAdultsValue}
                filterTitle={adultsValue === 1 ? 'Adult' : 'Adults'}
              />
              <ConditionFilter
                minValue={minChildrenValueForRequest}
                maxValue={maxChildrenValue}
                conditionValue={childrenValue}
                setValue={setChildrenValue}
                setChildrenAgeOptionList={setChildrenAgeOptionList}
                childrenAgeOptionsList={childrenAgeOptionsList}
                ageOptions={ageOptions}
                filterTitle={childrenValue === 1 ? 'Child' : 'Children'}
              />
              <ConditionFilter
                minValue={minOtherValueForRequest}
                maxValue={maxOtherValue}
                conditionValue={roomsValue}
                setValue={setRoomsValues}
                filterTitle={roomsValue === 1 ? 'Room' : 'Rooms'}
              />
              <DropDownList
                childrenAgeOptionsList={childrenAgeOptionsList}
                ageOptions={ageOptions}
              />
            </ConditionFilters>
          </ClickAwayListener>
        ))}
      </Transition>
    </StyleSearchConditions>
  );
}

export default SearchConditions;
