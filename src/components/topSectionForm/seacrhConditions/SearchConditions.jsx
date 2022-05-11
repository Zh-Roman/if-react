import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import './SearchConditions.css';
import ConditionValue from './conditionValue/ConditionValue';
import ConditionFilter from './conditionFilter/ConditionFilter';
import DropDownList from './dropDownList/DropDownList';

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
          conditionValue={roomValue}
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
          </div>
        ))}
      </Transition>
    </div>
  );
}

export default SearchConditions;
