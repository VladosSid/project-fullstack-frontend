import {
  RecipeItem,
  Label,
  ImageWrapper,
  //   TextContainer,

  //   RealCheckbox,
  //   CustomCheckbox,
  //   IngNumber,
  //   IngName,
  //   IngDescr,
} from './RecipeInngredientsItem.styled';

// const queryAllIngredients = async () => {
//   try {
//     const { data } = await instanceBacEnd.get('/ingredients/list');
//     return data;
//   } catch (err) {
//     return err.response.data.message;
//   }
// };

const RecipeInngredientsItem = () => {
  return (
    <>
      <RecipeItem>
        <Label>
          <ImageWrapper></ImageWrapper>
          {/* <TextContainer></TextContainer> */}
        </Label>
      </RecipeItem>
    </>
  );
};

export default RecipeInngredientsItem;
