import { HeaderBox } from './Header.styled';
import Logo from 'components/Logo';
import UserLogo from 'components/UserLogo';
import MobileMenuButton from 'components/MobileMenuButton';

const Header = () => {
  return (
    <HeaderBox>
      <Logo />
      <UserLogo />
      <MobileMenuButton />
    </HeaderBox>
  );
};

export default Header;
