import { InngredientsWrapper } from './RecipeInngredientsList.styled';
import RecipeInngredientsItem from '../RecipeInngredientsItem/RecipeInngredientsItem';

// const queryRecipeId = async id => {
//   try {
//     const { data } = await instanceBacEnd.get(`/recipes/${id}`);

//     return data;
//   } catch (err) {
//     return err.response.data.message;
//   }
// };
const RecipeInngredientsList = () => {
  return (
    <InngredientsWrapper>
      <RecipeInngredientsItem></RecipeInngredientsItem>
    </InngredientsWrapper>
  );
};

export default RecipeInngredientsList;
