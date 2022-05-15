import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext({});

export function ThemeProviderContext({ children }) {
  const [lightTheme, setLightTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ lightTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProviderContext.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
export default ThemeContext;
