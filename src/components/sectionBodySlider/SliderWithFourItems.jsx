import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';
import PropTypes from 'prop-types';
import ItemForSlider from './ItemForSlider';
import { StyleSliderWithFourItems, WithoutSlider } from './StyleSliderWithFourItems';
import useWindowSize from '../../hooks/useWindowSize';

SwiperCore.use([Navigation, Pagination]);

function SliderWithFourItems(props) {
  const windowWidth = useWindowSize();
  let numberOfSlides = null;
  let paginationForSlides = false;
  let resetMarginValueFalse = '104px auto 0';
  let resetMarginValueTrue = '64px auto 0';
  if (windowWidth < 1280) {
    numberOfSlides = 3;
  } else {
    numberOfSlides = 4;
  }
  if (windowWidth < 1024) {
    numberOfSlides = 2;
    resetMarginValueFalse = '80px auto 0';
    resetMarginValueTrue = '48px auto 0';
    paginationForSlides = { clickable: true };
  }
  if (windowWidth < 480) {
    resetMarginValueFalse = '40px auto 0';
    resetMarginValueTrue = '24px auto 0';
  }
  return (
    <StyleSliderWithFourItems
      resetMargin={props.resetMargin === 'reset_margin' ? resetMarginValueTrue : resetMarginValueFalse}
    >
      {props.data.length > numberOfSlides && (
        <Swiper
          navigation
          pagination={paginationForSlides}
          spaceBetween={0}
          slidesPerView={numberOfSlides}
          loop
        >
          {props.data.map((item) => (
            <SwiperSlide key={item.id}>
              <ItemForSlider
                item={item}
                needNavigate={props.needNavigate}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {props.data.length <= numberOfSlides && (
        <WithoutSlider>
          {props.data.map((item) => (
            <ItemForSlider
              key={item.id}
              item={item}
              needNavigate={props.needNavigate}
            />
          ))}
        </WithoutSlider>
      )}
    </StyleSliderWithFourItems>
  );
}

SliderWithFourItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
  })),
  resetMargin: PropTypes.string,
  needNavigate: PropTypes.bool,
};
export default SliderWithFourItems;
