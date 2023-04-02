import logo from '../../images/Header/logo.svg';
import { LogoSvg } from './Logo.styled';

const Logo = () => {
  return (
    <LogoSvg>
      <a href="/project-fullstack-frontend/home" aria-current="page">
        <img src={logo} alt="logo" width={40} height={40} />
      </a>
    </LogoSvg>
  );
};

export default Logo;
