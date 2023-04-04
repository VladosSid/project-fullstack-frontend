import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { recipesG } from 'gannaFakeData';
import { useLocation } from 'react-router-dom';
// import instanceBacEnd from 'helpers/requestBackEnd';
// import { useNavigate } from 'react-router-dom';

import { MainSection } from 'components/MainSection/MainSection';
import FavoriteList from 'components/FavoriteList/FavoriteList';

import { Children } from 'react';

const FavoritePage = () => {
  const location = useLocation();
  // const navigate = useNavigate();

  return (
    <MainSection title={'Favorite'}>
      <FavoriteList recipes={recipesG} location={location}>
        {Children}
      </FavoriteList>
    </MainSection>
  );
};

export default FavoritePage;
