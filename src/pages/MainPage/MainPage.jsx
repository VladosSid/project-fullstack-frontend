import React, { useState, useEffect } from 'react';
import { Recipes } from 'gannaFakeData';
// import axios from 'axios';

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
  const { REACT_APP_BASE_URL } = process.env;
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const searchUrl = `${BASE_URL}search/movie?api_key=${keyApi}&query=${queryFilm}&page=`;
  useEffect(() => {
    let queryQuantity = 1;

    if (width < 1441) {
      queryQuantity = 2;
    }
    if (width < 769) {
      queryQuantity = 1;
    }
    if (width >= 1441) {
      queryQuantity = 4;
    }
    console.log('Здесь идет запрос на бек', width, 'query', queryQuantity); // Выводим данные, полученные с бекенда в консоль
  }, [width]);

  const RecipesByCategory = Recipes.reduce((acc, recipe) => {
    if (!acc[recipe.category]) {
      acc[recipe.category] = [recipe];
    } else {
      acc[recipe.category].push(recipe);
    }
    return acc;
  }, {});
  const handleFormSubmit = query => {
    console.log('Query in Main', query);
    // const nextQuery = query !== '' ? { query } : {};
    // setSearchParams(nextQuery);
  };
  return (
    <ContainerWrapper>
      <MainPageHero onSubm={handleFormSubmit} />
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
