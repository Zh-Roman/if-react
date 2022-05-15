import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleSearchDestinationInput = styled.input`
  flex-grow: 1;
  padding: 0 24px;
  color: ${(props) => props.theme.colors.primaryText};
  @media screen and (max-width: 1024px) {
    height: 64px;
  }
  @media screen and (max-width: 480px) {
    height: 45px;
  }
  @media screen and (min-width: 1024px) {
    &:focus-within {
      border: 3px #F5BD41 solid;
      border-radius: 8px;
      margin: -3px;
    }
  }
`;

function SearchDestinationInput(props) {
  const [valueFromInput, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
    props.setValueForSubmit(e.target.value);
  };

  return (
    <StyleSearchDestinationInput
      className="search_destination_input"
      type="text"
      value={valueFromInput}
      onChange={handleChange}
      placeholder="Your destination or hotel name"
      required
    />
  );
}

SearchDestinationInput.propTypes = {
  setValueForSubmit: PropTypes.func.isRequired,
};
export default SearchDestinationInput;
