import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css/bundle';
import classes from './SectionBody.module.css';
import SectionBodyItem from './SectionBodyItem';

SwiperCore.use([Navigation]);

function HomesGuestsSectionBody(props) {
  return (
    <div {...props} className={classes.sectionBody}>
      <Swiper
        navigation
        pagination
        spaceBetween={16}
        slidesPerView={4}
        loop
      >
        {props.data.map((item) => <SwiperSlide key={item.id}><SectionBodyItem item={item} /></SwiperSlide>)}
      </Swiper>
    </div>
  );
}

export default HomesGuestsSectionBody;
