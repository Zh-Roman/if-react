import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import './SearchConditions.css';
import ConditionValue from './conditionValue/ConditionValue';
import ConditionFilter from './conditionFilter/ConditionFilter';
import DropDownList from './dropDownList/DropDownList';

function SearchConditions() {
  const minChildrenValue = 0;
  const minOtherValue = 1;
  const maxChildrenValue = 10;
  const maxOtherValue = 30;
  const ageOptions = [];
  for (let i = 0; i <= 17; i += 1) {
    const option = {
      value: `${i} years old`,
      label: `${i} years old`,
    };
    ageOptions.push(option);
  }
  const [adultsValue, setAdultsValue] = useState(minOtherValue);
  const [childrenValue, setChildrenValue] = useState(minChildrenValue);
  const [childrenAgeOptionsList, setChildrenAgeOptionList] = useState([]);
  const [roomsValue, setRoomsValue] = useState(minOtherValue);
  const [stateForFilter, setStateForFilter] = useState(false);
  return (
    <div
      className={`search_condition ${stateForFilter && 'color_frame'}`}
    >
      <div role="presentation" className="condition_values" onClick={() => setStateForFilter(!stateForFilter)}>
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
          conditionValue={roomsValue}
          conditionTitle="Rooms"
        />
      </div>

      <Transition
        in={stateForFilter}
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        {((state) => (
          <div className={`condition_filters ${state}`}>
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
              conditionValue={roomsValue}
              setValue={setRoomsValue}
              filterTitle="Rooms"
            />
            <DropDownList
              childrenValue={childrenValue}
              childrenAgeOptionsList={childrenAgeOptionsList}
            />
          </div>
        ))}
      </Transition>
    </div>
  );
}

export default SearchConditions;
