import React from 'react';
import './HotelProfile.css';

function HotelProfile(props) {
  const backgroundImage = {
    minHeight: '100vh',
    background: `url("${props.data.imageUrl}") center no-repeat`,
    backgroundSize: 'cover',
  };
  return (
    <div className="hotel_profile" style={backgroundImage}>
      <div className="profile_body" />
      <div className="profile_body_container">
        <h1 className="profile_title">{props.data.name}</h1>
      </div>
    </div>
  );
}

export default HotelProfile;
