import PropTypes from 'prop-types';
import Sprite from '../../assets/images/svg/sprite.svg';

function SpriteSVG({ name, className }) {
  return (
    <svg className={className}>
      <use href={`${Sprite}#${name}`} />
    </svg>
  );
}

SpriteSVG.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
export default SpriteSVG;
