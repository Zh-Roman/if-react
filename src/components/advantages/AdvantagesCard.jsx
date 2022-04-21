import React from 'react';
import './AdvantagesCard.css';
import SpriteSVG from '../spriteSVG/SpriteSVG';

function AdvantagesCard(props) {
  return (
    <div className="advantages_card">
      <SpriteSVG className="content_icon" name={props.advantageType} />
      <p>{props.advantageTitle}</p>
    </div>
  );
}

export default AdvantagesCard;
