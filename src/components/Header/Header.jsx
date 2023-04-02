import { HeaderBox } from './Header.styled';
import Logo from 'components/Logo';
import UserLogo from 'components/UserLogo';
import Navigation from 'components/Navigation';

const Header = () => {
  return (
    <HeaderBox>
      <Logo />
      <Navigation />
      <UserLogo />
    </HeaderBox>
  );
};

export default Header;
