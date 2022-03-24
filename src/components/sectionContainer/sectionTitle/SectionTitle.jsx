import React from 'react';

import classes from './SectionTitle.module.css';

function SectionTitle(props) {
  return (

    <h2 {...props} className={classes.sectionTitle}>
      {props.children}
    </h2>
  );
}
export default SectionTitle;
