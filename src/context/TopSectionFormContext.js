import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const FormContext = createContext({});

export function FormProviderContext({ children }) {
  const [searchRequestValue, setSearchRequestValue] = useState('');
  const [adultsValue, setAdultsValue] = useState(1);
  const [childrenValue, setChildrenValue] = useState(0);
  const [childrenAgeValue, setChildrenAgeValue] = useState('');
  const [roomsValue, setRoomsValues] = useState(1);
  const [dateFromValue, setDateFromValue] = useState('Check-in');
  const [dateToValue, setDateToValue] = useState('Check-out');
  return (
    <FormContext.Provider value={{
      searchRequestValue,
      setSearchRequestValue,
      adultsValue,
      childrenAgeValue,
      setAdultsValue,
      setChildrenAgeValue,
      childrenValue,
      setChildrenValue,
      roomsValue,
      setRoomsValues,
      dateFromValue,
      setDateFromValue,
      dateToValue,
      setDateToValue,
    }}
    >
      {children}
    </FormContext.Provider>
  );
}

FormProviderContext.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
export default FormContext;
