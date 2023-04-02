import React from 'react';
import { DishWrapper, DishTitleWrapper, DishTitle } from './DishCard.styled';
import { Link } from 'react-router-dom';

export default function DishCard({ location, recipe }) {
  return (
    <DishWrapper>
      {/* Здесь вместо <a> должно быть  <Link to={} state={{from:location}} >  */}
      <Link to={`/recipe-page/${recipe._id}`} state={{ from: location }}>
        <img src={recipe.imageUrl} alt={recipe.title} />
        <DishTitleWrapper>
          <DishTitle>{recipe.title}</DishTitle>
        </DishTitleWrapper>
      </Link>
    </DishWrapper>
  );
}
