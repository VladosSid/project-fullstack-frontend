import React from 'react';
import { Link } from 'react-router-dom';
import { UseSvg } from '../../helpers/useSvg/useSvg';
// import { queryBackEnd } from 'helpers/request';

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
} from './FavoriteItem.styled';

export default function FavoriteItem({ recipe, location, removeFavorite }) {
  const recipeId = recipe._id;
  // const pageNew = Math.ceil(allItem / 4);
  // const allPage = allItem % 4;
  // let pageBack = 1;
  // if (allPage === 1) {
  //   pageBack = pageNew - 1;
  // } else pageBack = pageNew;
  // console.log(allPage);
  // const removeFavorite = (_, page) => {
  //   page = pageBack;
  //   instanceBacEnd
  //     .patch(`/favorite/remove?page=${page}`, { recipe: `${recipeId}` })
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error.message));
  // };
  return (
    <CardWrapper>
      <CardImg src={recipe.imageUrl} alt={recipe.title} />
      <CardTextWrapper>
        <CardTitle>{recipe.title}</CardTitle>
        <CardDescription>{recipe.description}</CardDescription>
        <CardTime>{recipe.time} min</CardTime>
      </CardTextWrapper>
      <Link to={`/recipe-page/${recipe._id}`} state={{ from: location }}>
        <CardButtonSee>See recipe</CardButtonSee>
      </Link>
      <CardButtonDelete
        type="button"
        onClick={() => {
          removeFavorite(recipeId);
        }}
      >
        <CardIcon>
          <UseSvg id="removefav" />
        </CardIcon>
      </CardButtonDelete>
    </CardWrapper>
  );
}
