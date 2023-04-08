import React, { useState, useEffect } from 'react'; // eslint-disable-line
// import { recipesG } from 'gannaFakeData';
import { useLocation } from 'react-router-dom';
import instanceBacEnd from 'helpers/requestBackEnd';
// import { useNavigate } from 'react-router-dom';

import { MainContainer } from '../../components/MainContainer/MainContainer';
import FavoriteList from '../../components/FavoriteList/FavoriteList';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { Children } from 'react';
// import instanceBacEnd from 'helpers/requestBackEnd';
import { queryBackEnd } from 'helpers/request';
import { Container, Pagination, Stack } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { PaginationWrapper } from './FavoritePage.styled';

const FavoritePage = () => {
  const location = useLocation();
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allPage, setAllPage] = useState(1);
  const [allItem, setAllItem] = useState(0);

  useEffect(() => {
    setRecipes([]);
    const data = queryBackEnd.queryAllFavorite();
    data
      .then(results => {
        console.log(results.result.data);
        setRecipes(results.result.data.list);
        setAllItem(results.result.data.totalItem);
        console.log(results.result.data.totalItem);
        const pageQty = Math.ceil(allItem / 4);
        console.log(pageQty);
        setAllPage(pageQty);
      })
      .catch(error => error.message);
  }, []);

  const changeNum = (_, num) => {
    setCurrentPage(num);
    instanceBacEnd
      .get(`/favorite?page=${num}`)
      .then(response => setRecipes(response.data.result.data.list))
      .catch(error => console.log(error.message));
  };

  return (
    <MainContainer>
      <MainPageTitle title={'Favorite'} />
      <FavoriteList recipes={recipes} allItem={allItem} location={location}>
        {Children}
      </FavoriteList>
      <PaginationWrapper>
        <Container>
          <Stack spacing={2}>
            <Pagination
              count={allPage}
              page={currentPage}
              onChange={changeNum}
            />
          </Stack>
        </Container>
      </PaginationWrapper>
    </MainContainer>
  );
};

export default FavoritePage;
