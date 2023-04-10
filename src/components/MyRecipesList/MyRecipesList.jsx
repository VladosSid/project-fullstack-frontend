import React from 'react';
import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';
import { ListWrapper } from './MyRecipesList.styled';

const MyRecipesList = ({ recipes, allItem, location, removeOwmRecipe }) => {
  // console.log(recipes)

  return (
    <>
      <ListWrapper>
        {recipes.map(recipe => (
          <li id={recipe._id}>
            <MyRecipesItem
              recipe={recipe}
              allItem={allItem}
              location={location}
              removeOwnRecipe={removeOwmRecipe}
            />
          </li>
        ))}
      </ListWrapper>
    </>
  );
};

export default MyRecipesList;
