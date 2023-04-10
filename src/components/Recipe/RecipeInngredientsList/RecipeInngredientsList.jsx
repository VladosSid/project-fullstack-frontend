import {
  InngredientsList,
  RecipeItem,
  InngredientContainer,
  ImageWrapper,
  IngName,
  IngDescr,
} from './RecipeInngredientsList.styled';

const RecipeInngredientsList = ({ ingredients }) => {
  return (
    <InngredientsList>
      {ingredients &&
        ingredients.map(ingredient => (
          <RecipeItem key={ingredient._id}>
            <InngredientContainer>
              <ImageWrapper>
                <img src={ingredient.imageUrl} alt={ingredient.name} />
              </ImageWrapper>
              <IngName>{ingredient.title}</IngName>
              <IngDescr>{ingredient.measure}</IngDescr>
            </InngredientContainer>
          </RecipeItem>
        ))}
    </InngredientsList>
  );
};

export default RecipeInngredientsList;
