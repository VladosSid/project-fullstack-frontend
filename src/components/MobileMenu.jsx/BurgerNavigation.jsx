import { NavLink } from 'react-router-dom';

import Logo from 'components/Logo/Logo';
import { Ul } from '../Navigation/Navigation.styled';
import { CrossIcon } from './MobileMenu.styled';
import { BackdropMobileMenu } from './MobileMenu.styled';
import { SwButton } from './MobileMenu.styled';
import styles from './MobileMenu.module.css';
import search from '../../images/Header/search.svg';
import x from '../../images/Header/x.svg';

const BurgerNavigation = ({ onClick, isOpen }) => {
  const target = document.querySelector('body');

  return (
    <div className={!isOpen ? styles.overlay : styles.active}>
      <BackdropMobileMenu>
        <div>
          <Logo
            onClick={() => {
              target.classList.remove(styles.hidden);
              onClick();
            }}
          />
          <CrossIcon
            onClick={() => {
              target.classList.remove(styles.hidden);
              onClick();
            }}
          >
            <img src={x} alt="cross" width={32} height={32} />
          </CrossIcon>
        </div>
        <nav>
          <Ul>
            <li
              onClick={() => {
                target.classList.remove(styles.hidden);
                onClick();
              }}
            >
              <NavLink to="/categories">Categories</NavLink>
            </li>
            <li
              onClick={() => {
                target.classList.remove(styles.hidden);
                onClick();
              }}
            >
              <NavLink to="/add">Add recipes</NavLink>
            </li>
            <li
              onClick={() => {
                target.classList.remove(styles.hidden);
                onClick();
              }}
            >
              <NavLink to="/my">My recipes</NavLink>
            </li>
            <li
              onClick={() => {
                target.classList.remove(styles.hidden);
                onClick();
              }}
            >
              <NavLink to="/favorite">Favorites</NavLink>
            </li>
            <li
              onClick={() => {
                target.classList.remove(styles.hidden);
                onClick();
              }}
            >
              <NavLink to="/shopping-list">Shopping list</NavLink>
            </li>
            <li
              onClick={() => {
                target.classList.remove(styles.hidden);
                onClick();
              }}
            >
              <NavLink to="/search">
                <img src={search} alt="search" />
                <p>Search</p>
              </NavLink>
            </li>
          </Ul>
          <SwButton />
        </nav>
      </BackdropMobileMenu>
    </div>
  );
};

export default BurgerNavigation;
