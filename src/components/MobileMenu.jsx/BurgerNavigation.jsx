import styles from './MobileMenu.module.css';
import { NavLink } from 'react-router-dom';
import x from '../../images/Header/x.svg';
import search from '../../images/Header/search.svg';
import Logo from 'components/Logo/Logo';
import { Ul } from '../Navigation/Navigation.styled';
import { CrossIcon } from './MobileMenu.styled';
import { BackdropMobileMenu } from './MobileMenu.styled';
import { SwitcherBtn } from './SwitcherBtn';

const BurgerNavigation = ({ onClick, isOpen }) => {
  return (
    <div className={!isOpen ? styles.overlay : styles.active}>
      <BackdropMobileMenu>
        <div>
          <Logo onClick={onClick} />
          <CrossIcon onClick={() => onClick()}>
            <img src={x} alt="cross" width={32} height={32} />
          </CrossIcon>
        </div>
        <nav>
          <Ul>
            <li onClick={() => onClick()}>
              <NavLink to="/categories">Categories</NavLink>
            </li>
            <li onClick={() => onClick()}>
              <NavLink to="/add">Add recipes</NavLink>
            </li>
            <li onClick={() => onClick()}>
              <NavLink to="/my">My recipes</NavLink>
            </li>
            <li onClick={() => onClick()}>
              <NavLink to="/favorite">Favorites</NavLink>
            </li>
            <li onClick={() => onClick()}>
              <NavLink to="/shopping-list">Shopping list</NavLink>
            </li>
            <li onClick={() => onClick()}>
              <NavLink to="/search">
                <img src={search} alt="search" />
                <p>Search</p>
              </NavLink>
            </li>
          </Ul>
        </nav>
        <SwitcherBtn />
      </BackdropMobileMenu>
    </div>
  );
};

export default BurgerNavigation;
