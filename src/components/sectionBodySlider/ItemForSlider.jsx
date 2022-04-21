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
      <div>
        <div className="section_image_box">
          <img className="content__img" src={props.item.imageUrl} alt={props.item.name} />
          {props.item.country === undefined && (
            <div className="hover_effect">
              <div className="reservation__shadow" />
              <div className="reservation__booking booking_button">
                <a href="/">Book now</a>
              </div>
            </div>
          )}
        </div>
        <p className="place-name">{props.item.name}</p>
        {props.item.country !== undefined && (
        <p className="place-location">
          {props.item.city}
          ,
          {' '}
          {props.item.country}
        </p>
        )}
      </div>
    </div>
  );
}

export default ItemForSlider;
