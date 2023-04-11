import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import Logo from 'components/Logo/Logo';
import SwitcherBtn from './SwitcherBtn';
import { Overlay } from './MobileMenu.styled';
import { Ul } from '../../Navigation/Navigation.styled';
import { CrossIcon } from './MobileMenu.styled';
import { BackdropMobileMenu } from './MobileMenu.styled';
import x from '../../../images/Header/x.svg';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const burgerBtn = document.getElementById('burger-btn');
    if (!burgerBtn) {
      return;
    }
    burgerBtn.addEventListener('click', () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    });

    return burgerBtn.removeEventListener('click', () => setIsOpen(true));
  });

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        setIsOpen(false);
      }
    });

    return window.removeEventListener('keydown', e => {
      if (e.code === 'Escape') {
        setIsOpen(false);
      }
    });
  });

  const clickToggle = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <Overlay isOpen={isOpen}>
      <BackdropMobileMenu>
        <div>
          <Logo onClick={() => clickToggle()} />
          <CrossIcon onClick={() => clickToggle()}>
            <img src={x} alt="cross" width={32} height={32} />
          </CrossIcon>
        </div>
        <nav>
          <Ul>
            <li onClick={() => clickToggle()}>
              <NavLink to="/categories/Beef">Categories</NavLink>
            </li>
            <li onClick={() => clickToggle()}>
              <NavLink to="/add">Add recipes</NavLink>
            </li>
            <li onClick={() => clickToggle()}>
              <NavLink to="/my">My recipes</NavLink>
            </li>
            <li onClick={() => clickToggle()}>
              <NavLink to="/favorite">Favorites</NavLink>
            </li>
            <li onClick={() => clickToggle()}>
              <NavLink to="/shopping-list">Shopping list</NavLink>
            </li>
            <li onClick={() => clickToggle()}>
              <NavLink to="/search">
                <AiOutlineSearch size={24} alt="search" />
                <p>Search</p>
              </NavLink>
            </li>
          </Ul>
          <SwitcherBtn />
        </nav>
      </BackdropMobileMenu>
    </Overlay>
  );
};
export default MobileMenu;
