import { RecipePageHero } from 'components/Recipe/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from 'components/Recipe/RecipeInngredientsList/RecipeInngredientsList';
import { useState, useEffect } from 'react';
// import axios from 'axios';
import {
  TitltListWrap,
  TitleListIngredient,
  TitleListNumber,
  Tabl,
} from './RecipePage.styled';
import { MainContainer } from '../../components/MainContainer/MainContainer';
import queryBackEnd from '../../helpers/request/queryBackEnd';
import { useParams } from 'react-router-dom';

const RecipePage = () => {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      console.log(recipeId);
      const data = await queryBackEnd.queryRecipeId(recipeId);
      console.log(data);

      setRecipe(data.result.data[0]);
    };
    fetchData();
  }, [recipeId]);

  return (
    <>
      <RecipePageHero
        title={recipe.title}
        description={recipe.description}
        time={recipe.time}
      />
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
        <RecipeInngredientsList ingredients={recipe.ingredients} />
      </MainContainer>
    </>
  );
};

export default RecipePage;
