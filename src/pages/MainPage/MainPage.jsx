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
  GridContainer,
  Section,
  MPButton,
} from './MainPage.styled';

import MainPageHero from 'components/MainPageHero';
import DishCard from 'components/DishCard';
import { createCategoryUrl, createSearchUrl } from 'helpers/createSearchUrl';
//--------------------------------------
export default function MainPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  //Do we need resize?

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [quantity, setQuantity] = useState(() => {
    const width = window.innerWidth;

    if (width >= 1240) {
      return 4;
    } else if (width >= 768 && width < 1240) {
      return 2;
    } else {
      return 1;
    }
  });

  useEffect(() => {
    const handleWindowResize = () => {
      const width = window.innerWidth;

      if (width >= 1240) {
        setQuantity(4);
      } else if (width >= 768 && width < 1240) {
        setQuantity(2);
      } else {
        setQuantity(1);
      }

      setViewportWidth(width);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    instanceBacEnd.defaults.headers.common.Authorization =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkZDdmODlmN2I0N2RlNDk0OGI4ZDIiLCJpYXQiOjE2ODA3MjYwMDh9._Zf3orn5P6u54hilJsmRc8snd2oRt7Ol77pu3M3IqYQ';

    instanceBacEnd
      .get(`/recipes/main-page?query=${quantity}`)

      .then(function (response) {
        setRecipes(response.data.result.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
    console.log('quantity', quantity);
  }, [quantity]);

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

    // const nextQuery = query !== '' ? { query } : {};
    // setSearchParams(nextQuery);
    const searchUrl = createSearchUrl(query);
    console.log('SearchUrl in MainPage', searchUrl);
    navigate(searchUrl);
  };

  const handleCategoryClick = category => {
    console.log('category in Main', category);

    // const nextQuery = query !== '' ? { query } : {};
    // setSearchParams(nextQuery);
    const categoryUrl = createCategoryUrl(category);
    navigate(categoryUrl);
  };
  //-------------------
  return (
    <ContainerWrapper>
      <MainPageHero onSubm={handleFormSubmit} />
      <Section>
        <Container>
          {Object.entries(RecipesByCategory).map(([category, recipes]) => (
            <div key={category}>
              <RecipeCategoryName>{category}</RecipeCategoryName>
              <GridContainer>
                {recipes.map(recipe => (
                  <DishCard
                    key={recipe._id}
                    location={location}
                    recipe={recipe}
                  />
                ))}
              </GridContainer>

              <Button onClick={() => handleCategoryClick(category)}>
                See all
              </Button>
            </div>
          ))}
        </Container>
        <MPButton onClick={() => handleCategoryClick('breakfast')}>
          Other categories
        </MPButton>
      </Section>
    </ContainerWrapper>
  );
}

//${ REACT_APP_BASE_URL } /recipes/main - page ? ${ queryQuantity }
