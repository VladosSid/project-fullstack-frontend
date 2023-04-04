import React from 'react';
import FavoriteItem from 'components/FaforiteItem/FavoriteItem';
import { ListWrapper } from './FavoriteList.styled';

const FavoriteList = ({ recipes, location }) => {
  console.log(recipes);

  return (
    <>
      <ListWrapper>
        {recipes.map(recipe => (
          <li id={recipe._id}>
            <FavoriteItem recipe={recipe} location={location} />
          </li>
        ))}
      </ListWrapper>
    </>
  );
};

export default FavoriteList;
