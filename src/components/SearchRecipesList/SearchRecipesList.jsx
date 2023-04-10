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
  PaginationWrapper,
} from './SearchRecipesList.styled';
import { queryBackEnd } from 'helpers/request';
//----
import { Container, Pagination, Stack } from '@mui/material';

//-------------------------
export default function SearchRecipesList({ searchQuery, searchType }) {
  const location = useLocation();
  // const [searchValue, setSearchValue] = useState('');
  // const [searchType, setSearchType] = useState('query');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  //------------------ Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 4;
  //-------------
  useEffect(() => {
    const processedValue = searchQuery.trim().replace(/ +/g, '%20');

    const response = queryBackEnd.querySearch(
      searchType,
      processedValue,
      itemsPerPage,
      page
    );
    response
      .then(results => {
        setRecipes(results.result.data.list);
        //---- Pag
        setTotalPages(Math.ceil(results.result.data.totalItem / itemsPerPage));
        //-----
        setError(null);
      })
      .catch(function (error) {
        if (error.response && error.response.status === 404) {
          setError(
            <ErrorComponent>
              "There is no such ingredient. Try something else... "
            </ErrorComponent>
          );
        } else {
          setError(<ErrorComponent message="An error occurred" />);
        }
      });
  }, [searchQuery, searchType, itemsPerPage, page]);

  const changeNum = (_, num) => {
    const processedValue = searchQuery.trim().replace(/ +/g, '%20');
    setPage(num);
    queryBackEnd
      .querySearch(searchType, processedValue, 3, num)
      // .get(`/favorite?page=${num}`)
      .then(results => setRecipes(results.result.data.list))
      .catch(error => console.log(error.message));
  };
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
          {totalPages > 1 && (
            <PaginationWrapper>
              <Container>
                <Stack spacing={2}>
                  <Pagination
                    count={totalPages}
                    page={page}
                    onChange={changeNum}
                    // showFirstButton
                    // showLastButton
                    siblingCount={1}
                    sx={{ marginY: 3, marginX: 'auto' }}
                  />
                </Stack>
              </Container>
            </PaginationWrapper>
          )}
        </>
      )}
    </>
  );
}

//<RecipesList recipes={recipes} />
//searchQuery.query.toLowerCase()
