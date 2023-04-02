import React from 'react';
import { DishWrapper, DishTitleWrapper, DishTitle } from './DishCard.styled';

export default function DishCard({ recipe }) {
  return (
    <DishWrapper>
      <a href="https://recepiesPage.com">
        {/* Здесь вместо <a> должно быть  <Link to={} state={{from:location}} >  */}

        <img src={recipe.imageUrl} alt={recipe.title} />
        <DishTitleWrapper>
          <DishTitle>{recipe.title}</DishTitle>
        </DishTitleWrapper>
      </a>
    </DishWrapper>
  );
}
