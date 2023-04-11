import {
  InngredientsList,
  RecipeItem,
  InngredientContainer,
  ImageWrapper,
  IngName,
  IngDescr,
  RealCheckbox,
  CustomCheckbox,
} from './RecipeInngredientsList.styled';
import { UseSvg } from '../../../helpers/useSvg/useSvg';

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
            <RealCheckbox type="checkbox" />
            <CustomCheckbox>
              <UseSvg id="Pick" />
            </CustomCheckbox>
          </RecipeItem>
        ))}
    </InngredientsList>
  );
};

export default RecipeInngredientsList;
