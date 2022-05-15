import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SpriteSVG from '../spriteSVG/SpriteSVG';

const StyleDestinationOpener = styled.div`
  margin-top: 8px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  .array_opener {
    height: 100%;
    width: 100%;
    fill: #F3F3F4;
  }

  @media screen and (max-width: 640px) {
    width: 32px;
    height: 32px;
    margin-top: 0;
  }
  @media screen and (max-width: 480px) {
    width: 28px;
    height: 28px;
  }
`;

function DestinationOpener(props) {
  const handleClick = () => props.setDestinationOpener(!props.destinationOpener);
  return (
    <StyleDestinationOpener role="presentation" onClick={handleClick}>
      <SpriteSVG name={props.name} className="array_opener" />
    </StyleDestinationOpener>
  );
}

DestinationOpener.propTypes = {
  setDestinationOpener: PropTypes.func.isRequired,
  destinationOpener: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
export default DestinationOpener;
