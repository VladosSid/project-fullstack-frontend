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

// import { SxProps, Theme } from '@mui/material/styles';
import { PaginationWrapper } from './FavoritePage.styled';
import Notiflix from 'notiflix';

const FavoritePage = () => {
  const location = useLocation();
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allPage, setAllPage] = useState();
  const [allItem, setAllItem] = useState();

  useEffect(() => {
    // setRecipes([]);
    const data = queryBackEnd.queryAllFavorite();
    data
      .then(results => {
        if (results.result.data.list === []) {
          Notiflix.Notify.failure('The list is empty');
        }
        setRecipes(results.result.data.list);
        setAllItem(results.result.data.totalItem);
        const pageQty = Math.ceil(results.result.data.totalItem / 4);
        setAllPage(pageQty);
      })
      .catch(error => {
        console.log(error.message);
        Notiflix.Notify.failure(`The list is empty`);
      });
  }, []);

  const changeNum = (_, num) => {
    setCurrentPage(num);
    instanceBacEnd
      .get(`/favorite?page=${num}`)
      .then(response => setRecipes(response.data.result.data.list))
      .catch(error => console.log(error.message));
  };

  const removeFavorite = recipeId => {
    const lastItem = allItem % 4;
    let pageBack;
    if (currentPage !== 1 || lastItem === 1) {
      pageBack = currentPage - 1;
    } else pageBack = currentPage;
    // console.log(currentPage);

    instanceBacEnd
      .patch(`/favorite/remove?page=${pageBack}`, { recipe: `${recipeId}` })
      .then(res => {
        const list = res.data.result.data.list;
        if (list.length === 0) {
          Notiflix.Notify.failure(`The list is empty`);
        }
        setRecipes(list);
        const totalItem = res.data.result.data.totalItem;
        setAllItem(totalItem);
        const quantyty = Math.ceil(totalItem / 4);
        setAllPage(quantyty);
      })
      .catch(error => {
        console.log(error.message);
        Notiflix.Notify.failure(`The list is empty`);
        // setRecipes([]);
      });
  };
  return (
    <MainContainer>
      <MainPageTitle title={'Favorite'} />
      <FavoriteList
        recipes={recipes}
        allItem={allItem}
        location={location}
        removeFavorite={removeFavorite}
      >
        {Children}
      </FavoriteList>
      <PaginationWrapper>
        <Container>
          <Stack spacing={2}>
            {allPage > 1 && (
              <Pagination
                count={allPage}
                page={currentPage}
                onChange={changeNum}
                // showFirstButton
                // showLastButton
                siblingCount={1}
                sx={{ marginY: 3, marginX: 'auto' }}
              />
            )}
          </Stack>
        </Container>
      </PaginationWrapper>
    </MainContainer>
  );
};

export default FavoritePage;
