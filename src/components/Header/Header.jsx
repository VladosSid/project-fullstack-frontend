import Logo from 'components/Logo';
import UserLogo from 'components/UserLogo';
import Navigation from 'components/Navigation';
import MobileMenu from 'components/MobileMenu.jsx/MobileMenu';
import { HeaderBox } from './Header.styled';
import { HeaderContainer } from './Header.styled';
import { HeaderSwitcherBtn } from 'components/MobileMenu.jsx/HeaderSwitcher';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderBox>
        <Logo />
        <Navigation />
        <UserLogo />
        <MobileMenu />
        <HeaderSwitcherBtn />
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
