import { useEffect, useState } from 'react';
import Logo from 'components/Logo';
import UserLogo from 'components/UserLogo';
import Navigation from 'components/Navigation';
import { HeaderBox } from './Header.styled';
import { HeaderContainer, BoxSwitch } from './Header.styled';
import BurgerButton from 'components/Burger/MobileMenu.jsx/BurgerButton';
import SwitcherBtn from '../Burger/MobileMenu.jsx/SwitcherBtn';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(0);
  const [locat, setlocat] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    return () =>
      window.removeEventListener('resize', () => {
        setWidth(window.innerWidth);
      });
  }, [width]);

  const location = useLocation().pathname;;
  console.log('location', location);

  // const getLocation = () => {
  //     if (location === "/home ") {
  //       console.log('true home');
  //   }
  // }
  //  getLocation()
    useEffect(() => {
      window.addEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
      return () =>
        window.removeEventListener('scroll', () => setScroll(window.scrollY));
    }, []);
  return (
    <HeaderContainer scroll={scroll} id="header">
      <HeaderBox id="header-box">
        <Logo />
        <Navigation />
        <UserLogo />
        <BurgerButton />
        <BoxSwitch>
          <SwitcherBtn />
        </BoxSwitch>
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
