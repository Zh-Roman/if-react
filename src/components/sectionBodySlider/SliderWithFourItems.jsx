import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css/bundle';
import classes from './SectionBody.module.css';
import ItemForSlider from './ItemForSlider';

SwiperCore.use([Navigation]);

function SliderWithFourItems(props) {
  return (
    <div className={classes.sectionBody}>
      {props.data.length > 4 && (
        <Swiper
          navigation
          pagination
          spaceBetween={16}
          slidesPerView={4}
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
      {props.data.length <= 4 && (
        <div className={classes.without_slider}>
          {props.data.map((item) => (
            <ItemForSlider
              key={item.id}
              item={item}
              needNavigate={props.needNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SliderWithFourItems;
