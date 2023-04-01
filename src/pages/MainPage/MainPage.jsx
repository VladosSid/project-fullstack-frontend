import React from 'react';
import { Recipes } from 'gannaFakeData';

// import { Link } from 'react-router-dom';
// import { Container, CardWrapper, RecipeTitle } from 'mainPage.styled';
import {
  Container,
  RecipeCategoryName,
  Button,
  ContainerWrapper,
} from './MainPage.styled';

import MainPageHero from 'components/MainPageHero';
import DishCard from 'components/DishCard';

export default function MainPage() {
  const RecipesByCategory = Recipes.reduce((acc, recipe) => {
    if (!acc[recipe.category]) {
      acc[recipe.category] = [recipe];
    } else {
      acc[recipe.category].push(recipe);
    }
    return acc;
  }, {});

  return (
    <ContainerWrapper>
      <MainPageHero />
      <Container>
        {Object.entries(RecipesByCategory).map(([category, recipes]) => (
          <div key={category}>
            <RecipeCategoryName>{category}</RecipeCategoryName>

            {recipes.map(recipe => (
              <DishCard key={recipe.id} recipe={recipe} />
            ))}

            <Button>See all</Button>
          </div>
        ))}
      </Container>
    </ContainerWrapper>
  );
}
