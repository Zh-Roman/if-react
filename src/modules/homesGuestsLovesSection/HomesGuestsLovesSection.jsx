import React from 'react';
import './HomesGuestsLovesSection.css';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import SliderWithFourItems from '../../components/sectionBodySlider/SliderWithFourItems';
import useFetch from '../../hooks/useFetch';

const urlForRequest = 'https://fe-student-api.herokuapp.com/api/hotels/popular';

function HomesGuestsLovesSection() {
  const { data } = useFetch(urlForRequest);
  return (
    <div>
      {data.length > 0 && (
      <div className="homesGuestsLoves">
        <SectionTitle>Homes guests loves</SectionTitle>
        <SliderWithFourItems data={data} />
      </div>
      ) }
    </div>
  );
}

export default HomesGuestsLovesSection;
