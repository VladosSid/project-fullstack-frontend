import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { recipesG } from 'gannaFakeData';
import { useLocation } from 'react-router-dom';
// import instanceBacEnd from 'helpers/requestBackEnd';
// import { useNavigate } from 'react-router-dom';

import { MainContainer } from '../../components/MainContainer/MainContainer';
import MyRecipesList from '../../components/MyRecipesList/MyRecipesList';

import { Children } from 'react';

const MyRecipesPage = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  return (
    <MainContainer title={'My recipes'}>
      <MyRecipesList recipes={recipesG} location={location}>
        {Children}
      </MyRecipesList>
    </MainContainer>
  );
};

export default MyRecipesPage;
