import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import AdvantagesContent from '../../components/advantages/AdvantagesContent';

const StyleWhatDoWeOffer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryMain};
`;

function WhatDoWeOffer() {
  return (
    <StyleWhatDoWeOffer>
      <div className="_container">
        <SectionTitle>What do we offer</SectionTitle>
        <AdvantagesContent />
      </div>
    </StyleWhatDoWeOffer>

  );
}

export default WhatDoWeOffer;
