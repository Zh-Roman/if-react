import React from 'react';
import './TopSectionTitle.css';

function TopSectionTitle(props) {
  const { children } = props;
  return (
    <h1 className="top_section_title">
      {children}
    </h1>
  );
}

export default TopSectionTitle;
