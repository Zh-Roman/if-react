import React, { useEffect, useState } from 'react';
import './DropDownList.css';

function DropDownList(props) {
  const [selectValue, setSelectValue] = useState({});
  const handleChange = (e) => {
    if (e.target.value !== 'Indicate age') {
      setSelectValue({ ...selectValue, [e.target.id]: e.target.value });
    }
  };
  useEffect(() => {
    props.setChildrenValue(Object.values(selectValue).join(','));
  }, [selectValue]);
  return (
    <div>
      {props.childrenValue > 0 && (
      <div className="drop_down_list">
        <p>What is the age of the child you’re travelling with?</p>
        <div className="list_of_selects">
          {props.childrenAgeOptionsList.map(
            (select) => (
              <select id={select.id} key={select.key} onChange={handleChange}>
                {props.ageOptions.map(
                  (option) => (<option key={option.value} value={option.value}>{option.label}</option>),
                )}
              </select>
            ),
          )}
        </div>
      </div>
      )}
    </div>
  );
}

export default DropDownList;
