import { useEffect, useState } from 'react';
import Logo from 'components/Logo';
import UserLogo from 'components/UserLogo';
import Navigation from 'components/Navigation';
import { HeaderBox } from './Header.styled';
import { HeaderContainer } from './Header.styled';
import { SB } from 'components/Burger/MobileMenu.jsx/MobileMenu.styled';
import BurgerButton from 'components/Burger/MobileMenu.jsx/BurgerButton';
import helper from './helper.module.css';

const Header = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => setScroll(window.scrollY));
    return () =>
      window.removeEventListener('scroll', () => setScroll(window.scrollY));
  }, []);

  return (
    <HeaderContainer
      className={scroll > 80 ? helper.visible : helper.transparent}
      id="header"
    >
      <HeaderBox>
        <Logo />
        <Navigation />
        <UserLogo />
        <BurgerButton />
        <SB />
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
