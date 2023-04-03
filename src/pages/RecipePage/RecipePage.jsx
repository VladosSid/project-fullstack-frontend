// import RecipeInngredientsList from 'Components/Recipe/RecipeInngredientsList/RecipeInngredientsList';

// import RecipePageHero from 'Components/Recipe/RecipePageHero/RecipePageHero';
// import RecipePreparation from 'Components/Recipe/RecipePreparation/RecipePreparation';

import {
  TitltListWrap,
  TitleListIngredient,
  TitleListNumber,
  ContanerRecipeList,
  Tabl,
} from './RecipePage.styled';

// import ingredients from '../../ingredients.json';

const RecipePage = () => {
  return (
    <ContanerRecipeList>
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
    </ContanerRecipeList>
  );
};

export default RecipePage;
