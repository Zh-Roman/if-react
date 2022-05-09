import React from 'react';
import './ConditionFilter.css';
import shortid from 'shortid';

function ConditionFilter(props) {
  const incrementValue = () => {
    if (props.conditionValue < props.maxValue) {
      props.setValue(props.conditionValue + 1);
      if (props.childrenAgeOptionsList !== undefined) {
        props.setChildrenAgeOptionList([...props.childrenAgeOptionsList, { key: shortid.generate(), id: props.conditionValue }]);
      }
    }
  };
  const decrementValue = () => {
    if (props.conditionValue > props.minValue) {
      props.setValue(props.conditionValue - 1);
      if (props.childrenAgeOptionsList !== undefined) {
        props.setChildrenAgeOptionList(props.childrenAgeOptionsList.slice(0, -1));
      }
    }
  };
  return (
    <div className="condition_filter">
      <p>{props.filterTitle}</p>
      <div className="filter_value">
        <div
          role="presentation"
          className={`condition_button ${props.conditionValue === props.minValue ? 'limit_value' : 'valid_value'}`}
          onClick={decrementValue}
        >
          —
        </div>
        <p className="numOfValue">{props.conditionValue}</p>
        <div
          role="presentation"
          className={`condition_button ${props.conditionValue === props.maxValue ? 'limit_value' : 'valid_value'}`}
          onClick={incrementValue}
        >
          +
        </div>
      </div>
    </div>
  );
}

export default ConditionFilter;
