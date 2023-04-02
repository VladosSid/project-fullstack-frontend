import { NavLink } from 'react-router-dom';
import x from '../../images/Header/x.svg';
import search from '../../images/Header/search.svg';
import Logo from 'components/Logo/Logo';
import { Ul } from '../Navigation/Navigation.styled';
import { CrossIcon } from './MobileMenu.styled';
import { BackdropMobileMenu } from './MobileMenu.styled';

const BurgerNavigation = ({ onClick }) => {
  return (
    <BackdropMobileMenu>
      <div>
        <Logo />
        <CrossIcon onClick={() => onClick()}>
          <img src={x} alt="cross" width={32} height={32} />
        </CrossIcon>
      </div>
      <nav>
        <Ul>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add recipes</NavLink>
          </li>
          <li>
            <NavLink to="/my">My recipes</NavLink>
          </li>
          <li>
            <NavLink to="/favorite">Favorites</NavLink>
          </li>
          <li>
            <NavLink to="/shopping-list">Shopping list</NavLink>
          </li>
          <li>
            <NavLink to="/search">
              <img src={search} alt="search" />
              <p>Search</p>
            </NavLink>
          </li>
        </Ul>
      </nav>
    </BackdropMobileMenu>
  );
};

export default BurgerNavigation;
