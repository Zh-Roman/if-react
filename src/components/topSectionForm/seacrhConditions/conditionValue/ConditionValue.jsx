import React from 'react';
import './ConditionValue.css';

function ConditionValue(props) {
  return (
    <div className="condition_value">
      <div className="value">{props.conditionValue}</div>
      <p>{props.conditionTitle}</p>
    </div>
  );
}
export default ConditionValue;
