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
            <a href="/categories">Categories</a>
          </li>
          <li>
            <a href="/add">Add recipes</a>
          </li>
          <li>
            <a href="/my">My recipes</a>
          </li>
          <li>
            <a href="/favorite">Favorites</a>
          </li>
          <li>
            <a href="/shopping-list">Shopping list</a>
          </li>
          <li>
            <a href="/search">
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
