import React from 'react';
import { Link } from 'react-router-dom';
import { UseSvg } from '../../helpers/useSvg/useSvg';

import {
  CardWrapper,
  CardImg,
  CardTextWrapper,
  CardTitle,
  CardDescription,
  CardTime,
  CardButtonSee,
  CardButtonDelete,
  CardIcon,
} from './MyRecipesItem.styled';

const MyRecipesItem = ({ recipe, location }) => {
  return (
    <CardWrapper>
      <CardImg src={recipe.imageUrl} alt={recipe.title} />
      <CardTextWrapper>
        <CardTitle>{recipe.title}</CardTitle>
        <CardDescription>{recipe.description}</CardDescription>
        <CardTime>{recipe.time}</CardTime>
      </CardTextWrapper>
      <Link to={`/recipe-page/${recipe._id}`} state={{ from: location }}>
        <CardButtonSee>See recipe</CardButtonSee>
      </Link>

      <CardButtonDelete type="button" onClick={event => console.log(event)}>
        <CardIcon>
          <UseSvg id="removefav" />
        </CardIcon>
      </CardButtonDelete>
    </CardWrapper>
  );
};

export default MyRecipesItem;