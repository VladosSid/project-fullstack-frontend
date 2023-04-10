import { RecipePageHero } from 'components/Recipe/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from 'components/Recipe/RecipeInngredientsList/RecipeInngredientsList';
// import instanceBacEnd from 'helpers/requestBackEnd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TitltListWrap,
  TitleListIngredient,
  TitleListNumber,
  Tabl,
} from './RecipePage.styled';
import { MainContainer } from '../../components/MainContainer/MainContainer';
import queryBackEnd from '../../helpers/request/queryBackEnd';
// import ingredients from '../../ingredients.json';

const RecipePage = () => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await queryBackEnd.queryRecipeId('640cd5ac2d9fecf12e889807');
      console.log(data);
      // return
      setRecipe(data.result.data[0]);

      //   axios.defaults.headers.common.Authorization =
      //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJlOTUzNTMyY2UwM2ZiNGY4NmM1MDUiLCJpYXQiOjE2ODA3NzQ0NTV9.8SdYAK9XvsoHmvOJYHG_N6QCB59NbzQgdSNGr97rpwg';
      //   try {
      //     const recipe = await axios.get(
      //       'https://backend-soyummy.onrender.com/api/recipes/640cd5ac2d9fecf12e889807'
      //     );
      //     setRecipe(recipe.data.result.data[0]);
      //     console.log(recipe.data.result.data[0]);
      //   } catch (error) {
      //     console.log(error);
      //   } finally {
      //   }
    };
    fetchData();
  }, []);

  // const RecipePage = () => {
  //   const [recipe, setRecipe] = useState('');

  //   useEffect(() => {
  //     axios.defaults.headers.common.Authorization =
  //       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJlOTUzNTMyY2UwM2ZiNGY4NmM1MDUiLCJpYXQiOjE2ODA3NzQ0NTV9.8SdYAK9XvsoHmvOJYHG_N6QCB59NbzQgdSNGr97rpwg';

  //     try {
  //       (async () => {
  //         const recipe = await axios.get(
  //           'https://backend-soyummy.onrender.com/api/recipes/640cd5ac2d9fecf12e889807'
  //         );
  //         setRecipe(recipe.data.result.data[0]);
  //         console.log(recipe.data.result.data[0]);
  //       })();
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //     }
  //   }, []);

  return (
    <>
      <RecipePageHero title={recipe.title} description={recipe.description} />
      <MainContainer>
        <div>
          <h1>Recipe</h1>
        </div>
        <Tabl>
          <TitltListWrap>
            <TitleListIngredient>Ingredients</TitleListIngredient>
            <TitleListNumber>Number</TitleListNumber>
            <span>Add to list</span>
          </TitltListWrap>
        </Tabl>
        <RecipeInngredientsList />
      </MainContainer>
    </>
  );
};

export default RecipePage;
