import Logo from 'components/Logo';
import UserLogo from 'components/UserLogo';
import Navigation from 'components/Navigation';
import MobileMenu from 'components/MobileMenu.jsx/MobileMenu';
import { HeaderBox } from './Header.styled';
import { HeaderContainer } from './Header.styled';
import { SB } from 'components/MobileMenu.jsx/MobileMenu.styled';
// import { HeaderSwBtn } from 'components/MobileMenu.jsx/SwitcherHeader.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderBox>
        <Logo />
        <Navigation />
        <UserLogo />
        <MobileMenu />
        <SB />
        {/* <HeaderSwBtn /> */}
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
