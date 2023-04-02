// import { NavLink } from 'react-router-dom';
import { Ul } from './Navigation.styled';
import { HeaderNav } from './Navigation.styled';
import search from '../../images/Header/search.svg';

const Navigation = () => {
  return (
    <HeaderNav>
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
          <a href="/project-fullstack-frontend/shopping-list">Shopping list</a>
        </li>
        <li>
          <a href="/project-fullstack-frontend/search">
            <img src={search} alt="search" />
            <p>Search</p>
          </a>
        </li>
      </Ul>
    </HeaderNav>
  );
};

export default Navigation;
