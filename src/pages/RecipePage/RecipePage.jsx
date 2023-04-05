// import RecipeInngredientsList from 'Components/Recipe/RecipeInngredientsList/RecipeInngredientsList';

// import RecipePageHero from 'Components/Recipe/RecipePageHero/RecipePageHero';
// import RecipePreparation from 'Components/Recipe/RecipePreparation/RecipePreparation';

import { RecipePageHero } from 'components/Recipe/RecipePageHero/RecipePageHero';
import {
  TitltListWrap,
  TitleListIngredient,
  TitleListNumber,
  Tabl,
} from './RecipePage.styled';
import { MainContainer } from '../../components/MainContainer/MainContainer';

// import ingredients from '../../ingredients.json';

const RecipePage = () => {
  return (
    <>
      <RecipePageHero />
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
          {/* <IngredientsShoppingList ingredients={ingredients} /> */}
        </Tabl>
      </MainContainer>
    </>
  );
};

export default RecipePage;
