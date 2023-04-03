import React from 'react';
import {
  CardWrapper,
  CardImg,
  CardTextWrapper,
  CardTitle,
  CardDescription,
  CardTime,
  CardButtonSee,
  CardButtonDelete,
} from './FavoriteItem.styled';

export default function CardFavorite({ recipe }) {
  return (
    <CardWrapper>
      <CardImg src={recipe.imageUrl} alt={recipe.title} />
      <CardTextWrapper>
        <CardTitle>{recipe.title}</CardTitle>
        <CardDescription>{recipe.description}</CardDescription>
        <CardTime>{recipe.time}</CardTime>
      </CardTextWrapper>
      <CardButtonSee type="button" onClick={event => console.log(event)}>
        See recipe
      </CardButtonSee>
      <CardButtonDelete type="button" onClick={event => console.log(event)}>
        Del
      </CardButtonDelete>
    </CardWrapper>
  );
}
