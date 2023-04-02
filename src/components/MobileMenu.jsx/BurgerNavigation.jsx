// import { NavLink } from 'react-router-dom';
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
            <a href="/project-fullstack-frontend/categories">Categories</a>
          </li>
          <li>
            <a href="/project-fullstack-frontend/add">Add recipes</a>
          </li>
          <li>
            <a href="/project-fullstack-frontend/my">My recipes</a>
          </li>
          <li>
            <a href="/project-fullstack-frontend/favorite">Favorites</a>
          </li>
          <li>
            <a href="/project-fullstack-frontend/shopping-list">
              Shopping list
            </a>
          </li>
          <li>
            <a href="/project-fullstack-frontend/search">
              <img src={search} alt="search" />
              <p>Search</p>
            </a>
          </li>
        </Ul>
      </nav>
    </BackdropMobileMenu>
  );
};

export default BurgerNavigation;
