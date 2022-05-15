import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SliderStyle.css';
import PropTypes from 'prop-types';
import {
  StyleItemForSlider,
  PlaceName,
  PlaceLocation,
  SectionImageBox,
  ContentImg,
  HoverEffect,
  ReservationShadow,
  BookingButton,
  BookingButtonLink,
} from './StyleItemForSlider';

function ItemForSlider(props) {
  const navigate = useNavigate();
  const navigateToPage = () => {
    if (props.needNavigate === true) {
      navigate(`/hotels/${props.item.id}`);
    }
  };
  return (
    <StyleItemForSlider
      role="presentation"
      onClick={navigateToPage}
    >
      <div>
        <SectionImageBox>
          <ContentImg src={props.item.imageUrl} alt={props.item.name} />
          {props.item.country === undefined && (
            <HoverEffect>
              <ReservationShadow />
              <BookingButton>
                <BookingButtonLink href="/">Book now</BookingButtonLink>
              </BookingButton>
            </HoverEffect>
          )}
        </SectionImageBox>
        <PlaceName>{props.item.name}</PlaceName>
        {props.item.country !== undefined && (
          <PlaceLocation>
            {props.item.city}
            ,
            {' '}
            {props.item.country}
          </PlaceLocation>
        )}
      </div>
    </StyleItemForSlider>
  );
}

ItemForSlider.propTypes = {
  needNavigate: PropTypes.bool,

};
ItemForSlider.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
  }),
};
export default ItemForSlider;
