import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import RecipesList from './RecipesList';
import DishCard from 'components/DishCard/DishCard';
import instanceBacEnd from 'helpers/requestBackEnd';
import { GridContainer } from './SearchRecipesList.styled';
//-------------------------
export default function SearchRecipesList({ searchQuery, searchType }) {
  const location = useLocation();
  // const [searchValue, setSearchValue] = useState('');
  // const [searchType, setSearchType] = useState('query');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // const SQ = searchQuery.toLowerCase();
    console.log('in new effect', searchType, searchQuery);
    // const SQ = searchQuery.query.toLowerCase();
    // console.log('SQ', SQ);

    instanceBacEnd.defaults.headers.common.Authorization =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDI4NGEyNDI5ODkxOTJkMDJkOTc1ZGMiLCJpYXQiOjE2ODAzNjQzOTB9.F6KumBIsfhDh32UmksQgN3JqdFUpxwqq0ifHBL8dq3A';
    instanceBacEnd
      .get(
        `/search/?query=${searchQuery.query.toLowerCase()}&type=${searchType}`
      )
      .then(function (response) {
        console.log(searchQuery.query.toLowerCase(), searchType);
        setRecipes(response.data.result.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, [searchQuery, searchType]); //searchQuery
  console.log(recipes);
  return (
    <GridContainer>
      {recipes.map(recipe => (
        <DishCard key={recipe._id} location={location} recipe={recipe} />
      ))}
    </GridContainer>
  );
}

//<RecipesList recipes={recipes} />