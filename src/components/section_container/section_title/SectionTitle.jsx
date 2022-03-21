import React from 'react';

import classes from './SectionTitle.module.css';

function SectionTitle({ children }, ...props) {
  return (

    <h2 {...props} className={classes.sectionTitle}>
      {children}
    </h2>
  );
}
export default SectionTitle;
