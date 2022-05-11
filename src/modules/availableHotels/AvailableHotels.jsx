import React from 'react';
import './AvailableHotels.css';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import SliderWithFourItems from '../../components/sectionBodySlider/SliderWithFourItems';

function AvailableHotels(props) {
  const needNavigate = true;
  return (
    <div className="available_hotels">
      <SectionTitle>Available hotels</SectionTitle>
      <SliderWithFourItems
        data={props.dataFromSearchRequest}
        needNavigate={needNavigate}
      />
    </div>
  );
}

export default AvailableHotels;
