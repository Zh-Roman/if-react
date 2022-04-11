import Sprite from '../../assets/images/svg/sprite.svg';

function SpriteSVG({ name, className }) {
  return (
    <svg className={className}>
      <use href={`${Sprite}#${name}`} />
    </svg>
  );
}

export default SpriteSVG;
