import { HeaderBox } from './Header.styled';
import Logo from 'components/Logo';
import UserLogo from 'components/UserLogo';
import Navigation from 'components/Navigation';
import MobileMenu from 'components/MobileMenu.jsx/MobileMenu';
import { SwitcherBtn } from 'components/MobileMenu.jsx/SwitcherBtn';

const Header = () => {
  return (
    <HeaderBox>
      <Logo />
      <Navigation />
      <UserLogo />
      <MobileMenu />
      <SwitcherBtn />
    </HeaderBox>
  );
};

export default Header;
