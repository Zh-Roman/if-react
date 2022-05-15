import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import SliderWithFourItems from '../../components/sectionBodySlider/SliderWithFourItems';
import useFetch from '../../hooks/useFetch';

const urlForRequest = 'https://fe-student-api.herokuapp.com/api/hotels/popular';
const StyleHomesGuestsLovesSection = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryMain};
  padding: 120px 20px;
  @media screen and (max-width: 1024px) {
    padding: 80px 48px;
  }
  @media screen and (max-width: 480px) {
    padding: 40px 30px;
  }
`;

function HomesGuestsLovesSection() {
  const { data } = useFetch(urlForRequest);
  return (
    <div>
      {data.length > 0 && (
        <StyleHomesGuestsLovesSection>
          <SectionTitle>Homes guests loves</SectionTitle>
          <SliderWithFourItems data={data} />
        </StyleHomesGuestsLovesSection>
      )}
    </div>
  );
}

export default HomesGuestsLovesSection;
