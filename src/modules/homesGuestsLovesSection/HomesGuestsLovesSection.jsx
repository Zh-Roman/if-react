import React from 'react';
import './HomesGuestsLovesSection.css';
import SectionTitle from '../../components/sectionContainer/sectionTitle/SectionTitle';
import SliderWithFourItems from '../../components/sectionContainer/sectionBody/SliderWithFourItems';
import useFetch from '../../components/hooks/useFetch';

const urlForRequest = 'https://fe-student-api.herokuapp.com/api/hotels/popular';

function HomesGuestsLovesSection() {
  const { data } = useFetch(urlForRequest);
  return (
    <div className="homesGuestsLoves">
      <SectionTitle>Homes guests loves</SectionTitle>
      <SliderWithFourItems data={data} />
    </div>
  );
}

export default HomesGuestsLovesSection;
