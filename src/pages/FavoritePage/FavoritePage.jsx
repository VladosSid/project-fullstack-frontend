import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { recipesG } from 'gannaFakeData';
import { useLocation } from 'react-router-dom';
// import instanceBacEnd from 'helpers/requestBackEnd';
// import { useNavigate } from 'react-router-dom';

import { MainContainer } from '../../components/MainContainer/MainContainer';
import FavoriteList from '../../components/FavoriteList/FavoriteList';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { Children } from 'react';

const FavoritePage = () => {
  const location = useLocation();
  // const navigate = useNavigate();

  return (
    <MainContainer>
      <MainPageTitle title={'Favorite'} />
      <FavoriteList recipes={recipesG} location={location}>
        {Children}
      </FavoriteList>
    </MainContainer>
  );
};

export default FavoritePage;
