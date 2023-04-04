import { HeaderBox } from './Header.styled';
import Logo from 'components/Logo';
import UserLogo from 'components/UserLogo';
import Navigation from 'components/Navigation';
import MobileMenu from 'components/MobileMenu.jsx/MobileMenu';
import { MainContainer } from 'components/MainContainer/MainContainer';

const Header = () => {
  return (
    <MainContainer>
      <HeaderBox>
        <Logo />
        <Navigation />
        <UserLogo />
        <MobileMenu />
      </HeaderBox>
    </MainContainer>
  );
};

export default Header;
