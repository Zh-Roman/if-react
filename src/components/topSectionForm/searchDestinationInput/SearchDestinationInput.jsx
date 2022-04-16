import React, { useState } from 'react';
import './SearchDestinationInput.css';

function SearchDestinationInput(props) {
  const [valueFromInput, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
    props.setValueForSubmit(e.target.value);
  };

  return (
    <input
      className="search_destination_input"
      type="text"
      value={valueFromInput}
      onChange={handleChange}
      placeholder="Your destination or hotel name"
      required
    />
  );
}

export default SearchDestinationInput;
