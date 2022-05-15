import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import ClickAwayListener from 'react-click-away-listener';
import ConditionValue from './conditionValue/ConditionValue';
import ConditionFilter from './conditionFilter/ConditionFilter';
import DropDownList from './dropDownList/DropDownList';
import { ConditionFilters, ConditionValues, StyleSearchConditions } from './StyleSearchConditions';

function SearchConditions(props) {
  const minChildrenValue = 0;
  const minOtherValue = 1;
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
  const [adultsValue, setAdultsValue] = useState(1);
  const [childrenValue, setChildrenValue] = useState(minChildrenValue);
  const [childrenAgeOptionsList, setChildrenAgeOptionList] = useState([]);
  const [roomValue, setRoomValue] = useState(minOtherValue);
  const [stateForFilter, setStateForFilter] = useState(false);
  useEffect(() => {
    props.setAdultsValue(adultsValue);
    props.setRoomsValues(roomValue);
  }, [adultsValue, roomValue]);
  return (
    <StyleSearchConditions
      stateForFilter={stateForFilter ? 'border: 3px #F5BD41 solid; margin: -3px 0 -3px -1px;' : null}
    >
      {' '}
      <ConditionValues role="presentation" onClick={() => setStateForFilter(!stateForFilter)}>
        <ConditionValue
          conditionValue={adultsValue}
          conditionTitle="Adults"
        />
        <span>&nbsp;—&nbsp;</span>
        <ConditionValue
          conditionValue={childrenValue}
          conditionTitle="Children"
        />
        <span>&nbsp;—&nbsp;</span>
        <ConditionValue
          conditionValue={roomValue}
          conditionTitle="Rooms"
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
                minValue={minOtherValue}
                maxValue={maxOtherValue}
                conditionValue={adultsValue}
                setValue={setAdultsValue}
                filterTitle="Adults"
              />
              <ConditionFilter
                minValue={minChildrenValue}
                maxValue={maxChildrenValue}
                conditionValue={childrenValue}
                setValue={setChildrenValue}
                setChildrenAgeOptionList={setChildrenAgeOptionList}
                childrenAgeOptionsList={childrenAgeOptionsList}
                ageOptions={ageOptions}
                filterTitle="Children"
              />
              <ConditionFilter
                minValue={minOtherValue}
                maxValue={maxOtherValue}
                conditionValue={roomValue}
                setValue={setRoomValue}
                filterTitle="Rooms"
              />
              <DropDownList
                setChildrenValue={props.setChildrenValue}
                childrenValue={childrenValue}
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

SearchConditions.propTypes = {
  setAdultsValue: PropTypes.func.isRequired,
  setRoomsValues: PropTypes.func.isRequired,
  setChildrenValue: PropTypes.func.isRequired,
};
export default SearchConditions;
