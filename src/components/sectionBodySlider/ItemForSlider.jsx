import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemForSlider.css';

function ItemForSlider(props) {
  const navigate = useNavigate();
  const navigateToPage = () => {
    if (props.needNavigate === true) {
      navigate(`/hotels/${props.item.id}`);
    }
  };
  return (
    <div
      role="presentation"
      className={props.needNavigate === true ? 'sectionBodyItem hover_frame' : 'sectionBodyItem'}
      onClick={navigateToPage}
    >
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

export default ItemForSlider;
