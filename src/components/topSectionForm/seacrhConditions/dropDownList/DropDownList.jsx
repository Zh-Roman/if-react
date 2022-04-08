import React from 'react';
import './DropDownList.css';
import Select from 'react-select';

function DropDownList(props) {
  return (
    <div>
      {props.childrenValue > 0 && (
      <div className="drop_down_list">
        <p>What is the age of the child you’re travelling with?</p>
        <div className="list_of_selects">
          {props.childrenAgeOptionsList.map((select) => <Select placeholder="Indicate age" options={select.body} key={select.key} />)}
        </div>
      </div>
      )}
    </div>
  );
}

export default DropDownList;
