import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TopSectionTitle from '../../components/topSectionTitle/TopSectionTitle';
import TopSectionForm from '../../components/topSectionForm/TopSectionForm';
import TopSectionApps from '../../components/topSectionApps/TopSectionApps';
import mainBackground from '../../assets/images/topSectionBackground/background_picture.jpg';
import { FormProviderContext } from '../../context/TopSectionFormContext';

const StyleTopSection = styled.section`
  min-height: 100vh;
  background: url(${mainBackground}) center no-repeat;
  background-size: cover;
`;

const TopSectionContainer = styled.div`
  padding-top: 296px;
  @media screen and (max-width: 1280px) {
    padding-top: 148px;
  }
`;

function TopSection(props) {
  const topScreenRef = useRef(null);
  useEffect(() => {
    props.setRef(topScreenRef);
  }, [props.loading]);
  return (
    <StyleTopSection ref={topScreenRef}>
      <TopSectionContainer className="_container">
        <TopSectionTitle>
          Discover stays
          <br />
          to live, work or just relax
        </TopSectionTitle>
        <FormProviderContext>
          <TopSectionForm />
        </FormProviderContext>
        <TopSectionApps />
      </TopSectionContainer>
    </StyleTopSection>
  );
}

TopSection.propTypes = {
  setRef: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
export default TopSection;
