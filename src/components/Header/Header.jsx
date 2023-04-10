import { useEffect, useState } from 'react';
import Logo from 'components/Logo';
import UserLogo from 'components/UserLogo';
import Navigation from 'components/Navigation';
import { HeaderBox } from './Header.styled';
import { HeaderContainer } from './Header.styled';
import BurgerButton from 'components/Burger/MobileMenu.jsx/BurgerButton';
import helper from './helper.module.css';
import SwitcherBtn from '../Burger/MobileMenu.jsx/SwitcherBtn';

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    return () =>
      window.removeEventListener('resize', () => {
        setWidth(window.innerWidth);
      });
  }, [width]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () =>
      window.removeEventListener('scroll', () => setScroll(window.scrollY));
  }, []);
  return (
    <HeaderContainer
      className={scroll > 80 ? helper.visible : helper.transparent}
      id="header"
    >
      <HeaderBox id="header-box">
        <Logo />
        <Navigation />
        <UserLogo />
        <BurgerButton />
        {width >= 1240 && <SwitcherBtn />}
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
