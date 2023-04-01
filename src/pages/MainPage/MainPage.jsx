import React from 'react';
import { Recipes } from 'gannaFakeData';
// import { Link } from 'react-router-dom';
// import { Container, CardWrapper, RecipeTitle } from 'mainPage.styled';
import {
  Container,
  CardWrapper,
  RecipeTitle,
  RecipeTitleWrapper,
  RecipeCategoryName,
  Button,
  ContainerWrapper,
  RecipeImg,
} from './MainPage.styled';
import SearchBar from 'components/SearchBar';

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
      <SearchBar />
      <Container>
        {Object.entries(RecipesByCategory).map(([category, recipes]) => (
          <div key={category}>
            <RecipeCategoryName>{category}</RecipeCategoryName>
            {recipes.map(recipe => (
              <CardWrapper key={recipe.id}>
                <a href="https://recepiesPage.com">
                  <img src={recipe.preview} alt={recipe.title} />
                  <RecipeTitleWrapper>
                    <RecipeTitle>{recipe.title}</RecipeTitle>
                  </RecipeTitleWrapper>
                </a>
              </CardWrapper>
            ))}
            <Button>See all</Button>
          </div>
        ))}
      </Container>
    </ContainerWrapper>
  );
}
