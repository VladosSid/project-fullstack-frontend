import React, { useState, useEffect } from 'react';
// import { recipesG } from 'gannaFakeData';
import { useLocation } from 'react-router-dom';
import instanceBacEnd from 'helpers/requestBackEnd';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  RecipeCategoryName,
  Button,
  ContainerWrapper,
} from './MainPage.styled';

import MainPageHero from 'components/MainPageHero';
import DishCard from 'components/DishCard';
import createsearchUrl from 'helpers/createSearchUrl';
//--------------------------------------
export default function MainPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const queryRec = searchParams.get('query');
  const [width] = useState(window.innerWidth);

  //Do we need resize?
  //const [width, setWidth] = useState(window.innerWidth);
  // const handleResize = () => {
  //   setWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  useEffect(() => {
    instanceBacEnd.defaults.headers.common.Authorization =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDI4NzUwYzFiNzM4ODYyOTFmZjg2NjEiLCJpYXQiOjE2ODAzNzMwMjZ9.ymP8t20SkiGApZlELcfcz82ilJZ3AUN_Ax2PBk8eHvI';
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
    instanceBacEnd
      .get(`/recipes/main-page?query=${queryQuantity}`)

      .then(function (response) {
        setRecipes(response.data.result);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, [width]);

  const RecipesByCategory = recipes.reduce((acc, recipe) => {
    if (!acc[recipe.category]) {
      acc[recipe.category] = [recipe];
    } else {
      acc[recipe.category].push(recipe);
    }
    return acc;
  }, {});
  //---------------------------
  const handleFormSubmit = query => {
    console.log('Query in Main', query);
    console.log('recipes', recipes);
    // const nextQuery = query !== '' ? { query } : {};
    // setSearchParams(nextQuery);
    const searchUrl = createsearchUrl(query);
    navigate(searchUrl);
  };
  //-------------------
  return (
    <ContainerWrapper>
      <MainPageHero onSubm={handleFormSubmit} />
      <Container>
        {Object.entries(RecipesByCategory).map(([category, recipes]) => (
          <div key={category}>
            <RecipeCategoryName>{category}</RecipeCategoryName>

            {recipes.map(recipe => (
              <DishCard key={recipe._id} location={location} recipe={recipe} />
            ))}

            <Button>See all</Button>
          </div>
        ))}
      </Container>
    </ContainerWrapper>
  );
}

//${ REACT_APP_BASE_URL } /recipes/main - page ? ${ queryQuantity }
