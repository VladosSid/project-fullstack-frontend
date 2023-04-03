// import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Ul } from './Navigation.styled';
import { HeaderNav } from './Navigation.styled';
import search from '../../images/Header/search.svg';

const Navigation = () => {
  return (
    <HeaderNav>
      <Ul>
        <li>
          <NavLink to="/categories">
            Categories
          </NavLink>
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
          <NavLink to="/shopping-list">
            Shopping list
          </NavLink>
        </li>
        <li>
          <NavLink to="/search">
            <img src={search} alt="search" />
            <p>Search</p>
          </NavLink>
        </li>
      </Ul>
    </HeaderNav>
  );
};

export default Navigation;
