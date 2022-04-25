import React from 'react';
import './DestinationOpener.css';
import SpriteSVG from '../spriteSVG/SpriteSVG';

function DestinationOpener(props) {
  const handleClick = () => props.setDestinationOpener(!props.destinationOpener);
  return (
    <div className="destination_opener" role="presentation" onClick={handleClick}>
      <SpriteSVG name={props.name} className="array_opener" />
    </div>
  );
}

export default DestinationOpener;
