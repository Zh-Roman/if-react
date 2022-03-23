import React from 'react';
import './SectionBodyItem.css';

function SectionBodyItem(props) {
  return (
    <div className="sectionBodyItem">
      <div className="section_image_box">
        <img className="content__img" src={props.item.imageUrl} alt={props.item.name} />
      </div>
      <p className="place-name">{props.item.name}</p>
      <p className="place-location">
        {props.item.city}
        ,
        {' '}
        {props.item.country}
      </p>
    </div>
  );
}

export default SectionBodyItem;
