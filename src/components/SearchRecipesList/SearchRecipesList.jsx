import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import RecipesList from './RecipesList';
import DishCard from 'components/DishCard/DishCard';
import instanceBacEnd from 'helpers/requestBackEnd';
import {
  GridContainer,
  SRLNoItems,
  SRLNoItemsText,
} from './SearchRecipesList.styled';

//-------------------------
export default function SearchRecipesList({ searchQuery, searchType }) {
  const location = useLocation();
  // const [searchValue, setSearchValue] = useState('');
  // const [searchType, setSearchType] = useState('query');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    console.log('in new effect', searchType, searchQuery);

    instanceBacEnd.defaults.headers.common.Authorization =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkZDdmODlmN2I0N2RlNDk0OGI4ZDIiLCJpYXQiOjE2ODA4NzUxOTF9.4A3dgm3_3EJIMfFCD7WFd2VAM_iDXJ0MWGaA9UAg_uk';
    instanceBacEnd
      .get(`/search/?query=${searchQuery}&type=${searchType}`)
      .then(function (response) {
        console.log(searchQuery, searchType);
        setRecipes(response.data.result.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, [searchQuery, searchType]);
  console.log('recipes', recipes);
  return (
    <>
      {!recipes.length ? (
        <SRLNoItems>
          <SRLNoItemsText>Try looking for something else...</SRLNoItemsText>
        </SRLNoItems>
      ) : (
        <>
          <GridContainer>
            {recipes.map(recipe => (
              <DishCard key={recipe._id} location={location} recipe={recipe} />
            ))}
          </GridContainer>
          <div>Pagination</div>
        </>
      )}
    </>
  );
}

//<RecipesList recipes={recipes} />
//searchQuery.query.toLowerCase()
