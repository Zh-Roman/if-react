import React, { useState } from 'react';
import './TabMenu.css';

function TabMenu(props) {
  const [activeButton, setActiveButton] = useState('regions');
  const handleClick = (e) => {
    setActiveButton(e.target.name);
    props.setDestinationSection(e.target.name);
  };
  return (
    <div className="tab_menu">
      <button
        name="regions"
        className={
        activeButton === 'regions'
          ? 'top_section_button'
          : 'top_section_button _inactive'
      }
        type="button"
        onClick={handleClick}
      >
        Regions
      </button>
      <button
        name="cities"
        className={
          activeButton === 'cities'
            ? 'top_section_button'
            : 'top_section_button _inactive'
        }
        type="button"
        onClick={handleClick}
      >
        Cities
      </button>
      <button
        name="places"
        className={
          activeButton === 'places'
            ? 'top_section_button'
            : 'top_section_button _inactive'
        }
        type="button"
        onClick={handleClick}
      >
        Places of interest
      </button>
    </div>
  );
}

export default TabMenu;
