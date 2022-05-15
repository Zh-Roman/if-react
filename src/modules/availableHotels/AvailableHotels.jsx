import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import SliderWithFourItems from '../../components/sectionBodySlider/SliderWithFourItems';

const StyleAvailableHotels = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryMain};
  padding: 120px 48px;
  @media screen and (max-width: 1024px) {
    padding: 80px 48px;
  }
  @media screen and (max-width: 480px) {
    padding: 40px 30px;
  }
`;

function AvailableHotels(props) {
  const needNavigate = true;
  return (
    <StyleAvailableHotels>
      <SectionTitle>Available hotels</SectionTitle>
      <SliderWithFourItems
        data={props.dataFromSearchRequest}
        needNavigate={needNavigate}
      />
    </StyleAvailableHotels>
  );
}

AvailableHotels.propTypes = {
  dataFromSearchRequest: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
  })),
};
export default AvailableHotels;
