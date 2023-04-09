import { useEffect, useState } from 'react';
import Logo from 'components/Logo';
import UserLogo from 'components/UserLogo';
import Navigation from 'components/Navigation';
import MobileMenu from 'components/MobileMenu.jsx/MobileMenu';
import { HeaderBox } from './Header.styled';
import { HeaderContainer } from './Header.styled';
import { SB } from 'components/MobileMenu.jsx/MobileMenu.styled';
import helper from './helper.module.css';

const Header = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => setScroll(window.scrollY));
    return () =>
      window.removeEventListener('scroll', () => setScroll(window.scrollY));
  }, []);
  // console.log(scroll);

  return (
    <HeaderContainer
      className={scroll > 100 ? helper.visible : helper.transparent}
      id="header"
    >
      <HeaderBox>
        <Logo />
        <Navigation />
        <UserLogo />
        <MobileMenu />
        <SB />
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
