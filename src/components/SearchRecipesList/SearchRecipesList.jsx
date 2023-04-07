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
 
    console.log('in new effect', searchType, searchQuery);
   

    instanceBacEnd.defaults.headers.common.Authorization =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkZDdmODlmN2I0N2RlNDk0OGI4ZDIiLCJpYXQiOjE2ODA3MjYwMDh9._Zf3orn5P6u54hilJsmRc8snd2oRt7Ol77pu3M3IqYQ';
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

  return (
    <GridContainer>
      {recipes.map(recipe => (
        <DishCard key={recipe._id} location={location} recipe={recipe} />
      ))}
    </GridContainer>
  );
}

//<RecipesList recipes={recipes} />
//searchQuery.query.toLowerCase()
