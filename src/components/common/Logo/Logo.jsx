import icons from '../../Icons';

const Logo = () => {
  return (
    <a
      href={'/MoneyGuard/'}
    >
      <svg>
        <use href={`${icons}#icon-logo`}></use>
      </svg>
      <span>Money Guard</span>
    </a>
  );
};

export default Logo;