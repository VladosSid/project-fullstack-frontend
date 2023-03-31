import { HeaderBox } from './Header.styled';
import Logo from 'components/Logo';
import UserLogo from 'components/UserLogo';
import MobileMenuButton from 'components/MobileMenuButton';

const Header = () => {
  return (
    <section>
      <HeaderBox>
        <Logo />
        <UserLogo />
        <MobileMenuButton />
      </HeaderBox>
    </section>
  );
};

export default Header;
