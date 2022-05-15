import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import {
  ConditionButton,
  FilterValue,
  NumOfFilterValue,
  StyleConditionFilter,
  StyleConditionFilterName,
} from './StyleConditionFilter';

function ConditionFilter(props) {
  const incrementValue = () => {
    if (props.conditionValue < props.maxValue) {
      props.setValue(props.conditionValue + 1);
      if (props.childrenAgeOptionsList !== undefined) {
        props.setChildrenAgeOptionList([...props.childrenAgeOptionsList, {
          key: shortid.generate(),
          id: props.conditionValue,
        }]);
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
    <StyleConditionFilter>
      <StyleConditionFilterName>{props.filterTitle}</StyleConditionFilterName>
      <FilterValue>
        <ConditionButton
          role="presentation"
          className={`condition_button ${props.conditionValue === props.minValue ? 'limit_value' : 'valid_value'}`}
          onClick={decrementValue}
        >
          —
        </ConditionButton>
        <NumOfFilterValue className="numOfValue">{props.conditionValue}</NumOfFilterValue>
        <ConditionButton
          role="presentation"
          className={`condition_button ${props.conditionValue === props.maxValue ? 'limit_value' : 'valid_value'}`}
          onClick={incrementValue}
        >
          +
        </ConditionButton>
      </FilterValue>
    </StyleConditionFilter>
  );
}

ConditionFilter.propTypes = {
  conditionValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  childrenAgeOptionsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    key: PropTypes.string,
  })),
  setChildrenAgeOptionList: PropTypes.func,
  minValue: PropTypes.number.isRequired,
  filterTitle: PropTypes.string.isRequired,
};
export default ConditionFilter;
