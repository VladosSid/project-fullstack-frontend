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
          <NavLink to="/project-fullstack-frontend/categories">
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="/project-fullstack-frontend/add">Add recipes</NavLink>
        </li>
        <li>
          <NavLink to="/project-fullstack-frontend/my">My recipes</NavLink>
        </li>
        <li>
          <NavLink to="/project-fullstack-frontend/favorite">Favorites</NavLink>
        </li>
        <li>
          <NavLink to="/project-fullstack-frontend/shopping-list">
            Shopping list
          </NavLink>
        </li>
        <li>
          <NavLink to="/project-fullstack-frontend/search">
            <img src={search} alt="search" />
            <p>Search</p>
          </NavLink>
        </li>
      </Ul>
    </HeaderNav>
  );
};

export default Navigation;
