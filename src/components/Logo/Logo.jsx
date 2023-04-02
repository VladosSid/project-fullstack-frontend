import logo from '../../images/Header/logo.svg';
import { LogoSvg } from './Logo.styled';

const Logo = () => {
  return (
    <LogoSvg>
      <a href="/So Yummy" aria-current="page">
        <img src={logo} alt="logo" width={40} height={40} />
      </a>
    </LogoSvg>
  );
};

export default Logo;
