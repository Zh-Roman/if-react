import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleHotelProfile = styled.div``;
const ProfileBody = styled.div`
  padding-top: 140px;
  background-color: rgba(114, 114, 114, 0.5);
  @media screen and (max-width: 768px) {
    padding-top: 100px;
  }
  @media screen and (max-width: 480px) {
    padding-top: 60px;
  }
`;
const ProfileBodyContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: start;
  max-width: 1232px;
  margin: 0 auto;
  padding-bottom: 24px;
`;
const ProfileTitle = styled.h1`
  margin-left: 24px;
  font-size: 100px;
  color: #FFF;
  mix-blend-mode: difference;
  @media screen and (max-width: 768px) {
    font-size: 80px;
    margin-top: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 60px;
  }
`;

function HotelProfile(props) {
  const backgroundImage = {
    minHeight: '100vh',
    background: `url("${props.data.imageUrl}") center no-repeat`,
    backgroundSize: 'cover',
  };
  return (
    <StyleHotelProfile style={backgroundImage}>
      <ProfileBody />
      <ProfileBodyContainer>
        <ProfileTitle>{props.data.name}</ProfileTitle>
      </ProfileBodyContainer>
    </StyleHotelProfile>
  );
}

HotelProfile.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
  }),
};
export default HotelProfile;
