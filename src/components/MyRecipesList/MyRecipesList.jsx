import React from 'react';
import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';
import { ListWrapper } from './MyRecipesList.styled';

const MyRecipesList = ({ recipes, location }) => {
  // console.log(recipes)

  return (
    <>
      <ListWrapper>
        {recipes.map(recipe => (
          <li id={recipe._id}>
            <MyRecipesItem recipe={recipe} location={location} />
          </li>
        ))}
      </ListWrapper>
    </>
  );
};

export default MyRecipesList;
