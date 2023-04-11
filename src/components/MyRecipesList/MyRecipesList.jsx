import React from 'react';
import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';
import { ListWrapper } from './MyRecipesList.styled';

const MyRecipesList = ({ recipes, location, removeOwnRecipe }) => {
  // console.log(recipes)

  return (
    <>
      <ListWrapper>
        {recipes.map(recipe => (
          <li id={recipe._id}>
            <MyRecipesItem
              id={recipe._id}
              recipe={recipe}
              location={location}
              removeOwnRecipe={removeOwnRecipe}
            />
          </li>
        ))}
      </ListWrapper>
    </>
  );
};

export default MyRecipesList;
