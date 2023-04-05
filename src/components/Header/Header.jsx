import { HeaderBox } from './Header.styled';
import Logo from 'components/Logo';
import UserLogo from 'components/UserLogo';
import Navigation from 'components/Navigation';
import MobileMenu from 'components/MobileMenu.jsx/MobileMenu';

const Header = () => {
  return (
    <HeaderBox>
      <Logo />
      <Navigation />
      <UserLogo />
      <MobileMenu />
    </HeaderBox>
  );
};

export default Header;
