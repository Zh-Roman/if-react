import React from 'react';
import PropTypes from 'prop-types';
import SpriteSVG from '../spriteSVG/SpriteSVG';
import { AdvantagesCardText, StyleAdvantagesCard } from './StyleAdvantagesCard';

function AdvantagesCard(props) {
  return (
    <StyleAdvantagesCard>
      <SpriteSVG className="content_icon" name={props.advantageType} />
      <AdvantagesCardText>{props.advantageTitle}</AdvantagesCardText>
    </StyleAdvantagesCard>
  );
}

AdvantagesCard.propTypes = {
  advantageType: PropTypes.string.isRequired,
  advantageTitle: PropTypes.string.isRequired,
};
export default AdvantagesCard;
