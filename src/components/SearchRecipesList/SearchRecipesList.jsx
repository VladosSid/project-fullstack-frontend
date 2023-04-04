import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import RecipesList from './RecipesList';

const SearchRecipesList = () => {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('query');
  const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   const searchParams = new URLSearchParams(location.search);
  //   const query = searchParams.get('query') || '';
  //   const ingredient = searchParams.get('ingredient') || '';
  //   const type = searchParams.get('type') || 'query';
  //   setSearchValue(type === 'query' ? query : ingredient);
  //   setSearchType(type);
  // }, [location.search]);

  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     try {
  //       const response = await axios.get(
  //         `/api/recipes?${searchType}=${searchValue}`
  //       );
  //       setRecipes(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchRecipes();
  // }, [searchValue, searchType]);

  return <div>Hier will RecipesList</div>;
};

export default SearchRecipesList;
//<RecipesList recipes={recipes} />
