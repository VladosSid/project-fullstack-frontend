import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import RecipesList from './RecipesList';
import DishCard from 'components/DishCard/DishCard';

import {
  GridContainer,
  SRLNoItems,
  SRLNoItemsText,
  ErrorComponent,
} from './SearchRecipesList.styled';
import { queryBackEnd } from 'helpers/request';
//-------------------------
export default function SearchRecipesList({ searchQuery, searchType }) {
  const location = useLocation();
  // const [searchValue, setSearchValue] = useState('');
  // const [searchType, setSearchType] = useState('query');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const processedValue = searchQuery.trim().replace(/ +/g, '%20');
    // instanceBacEnd.defaults.headers.common.Authorization =
    //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkZDdmODlmN2I0N2RlNDk0OGI4ZDIiLCJpYXQiOjE2ODA4NzUxOTF9.4A3dgm3_3EJIMfFCD7WFd2VAM_iDXJ0MWGaA9UAg_uk';
    // instanceBacEnd
    //   .get(`/search/?query=${processedValue}&type=${searchType}`)
    const response = queryBackEnd.querySearch(searchType, processedValue, 6, 1);
    response
      .then(results => {
        setRecipes(results.result.data);
        setError(null);
      })
      .catch(function (error) {
        if (error.response && error.response.status === 404) {
          setError(
            <ErrorComponent>
              "There is no such ingredient. Try something else... "{' '}
            </ErrorComponent>
          );
        } else {
          setError(<ErrorComponent message="An error occurred" />);
        }
      });
  }, [searchQuery, searchType]);

  return (
    <>
      {error ? (
        <SRLNoItems>
          <SRLNoItemsText>
            There is no such ingredient.
            <br /> Try something else...
          </SRLNoItemsText>
        </SRLNoItems>
      ) : !recipes.length ? (
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
