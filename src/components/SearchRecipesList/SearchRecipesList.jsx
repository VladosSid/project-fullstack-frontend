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
  // PaginationWrapper,
} from './SearchRecipesList.styled';
import { queryBackEnd } from 'helpers/request';
//----
// import { Container, Pagination, Stack } from '@mui/material';

//-------------------------
export default function SearchRecipesList({ searchQuery, searchType }) {
  const location = useLocation();
  // const [searchValue, setSearchValue] = useState('');
  // const [searchType, setSearchType] = useState('query');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  //------------------ Pagination
  // const [currentPage, setCurrentPage] = useState(1);
  // const [allPage, setAllPage] = useState();
  // // const [allItem, setAllItem] = useState(1);
  // const [setAllItem] = useState(1);
  //-------------
  useEffect(() => {
    const processedValue = searchQuery.trim().replace(/ +/g, '%20');
    // instanceBacEnd.defaults.headers.common.Authorization =
    //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkZDdmODlmN2I0N2RlNDk0OGI4ZDIiLCJpYXQiOjE2ODA4NzUxOTF9.4A3dgm3_3EJIMfFCD7WFd2VAM_iDXJ0MWGaA9UAg_uk';
    // instanceBacEnd
    //   .get(`/search/?query=${processedValue}&type=${searchType}`)
    const response = queryBackEnd.querySearch(searchType, processedValue, 4);
    response
      .then(results => {
        console.log(results.result.data);
        setRecipes(results.result.data.list);
        //---- Pag
        // setAllItem(results.result.data.totalItem);
        // const pageQty = Math.ceil(results.result.data.totalItem / 3);
        // setAllPage(pageQty);
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
  }, [searchQuery, searchType]);
  // const changeNum = (_, num) => {
  //   const processedValue = searchQuery.trim().replace(/ +/g, '%20');
  //   setCurrentPage(num);
  //   queryBackEnd
  //     .querySearch(searchType, processedValue, 3, num)
  //     // .get(`/favorite?page=${num}`)
  //     .then(results => setRecipes(results.result.data.list))
  //     .catch(error => console.log(error.message));
  // };
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
          {/* <PaginationWrapper>
            <Container>
              <Stack spacing={2}>
                <Pagination
                  count={allPage}
                  page={currentPage}
                  onChange={changeNum}
                  // showFirstButton
                  // showLastButton
                  siblingCount={1}
                  sx={{ marginY: 3, marginX: 'auto' }}
                />
              </Stack>
            </Container>
          </PaginationWrapper> */}
        </>
      )}
    </>
  );
}

//<RecipesList recipes={recipes} />
//searchQuery.query.toLowerCase()
