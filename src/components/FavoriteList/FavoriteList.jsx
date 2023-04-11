import React from 'react';
import FavoriteItem from 'components/FaforiteItem/FavoriteItem';
import { ListWrapper } from './FavoriteList.styled';

const FavoriteList = ({ recipes, allItem, location, removeFavorite }) => {
  // console.log(recipes);

  return (
    <>
      <ListWrapper>
        {recipes.map(recipe => (
          <li id={recipe._id}>
            <FavoriteItem
              id={recipe._id}
              recipe={recipe}
              allItem={allItem}
              location={location}
              removeFavorite={removeFavorite}
            />
          </li>
        ))}
      </ListWrapper>
    </>
  );
};

export default FavoriteList;
