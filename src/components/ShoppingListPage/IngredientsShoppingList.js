import {
  List,
  Item,
  ImageContainer,
  ItemContainer,
  TitleProduct,
  NumberContainer,
  Remove,
  RemoveSvg,
} from './IngredientsShoppingList.styled';
import UseSvg from '../../helpers/useSvg/useSvg';

const IngredientsShoppingList = ({ ingredients, deleteIngradient }) => {
  return (
    <List>
      {ingredients.map(ingredient => (
        <Item key={ingredient._id}>
          <ItemContainer>
            <ImageContainer>
              <img src={ingredient.imageUrl} alt="ingredient" />
            </ImageContainer>
            <TitleProduct>{ingredient.title}</TitleProduct>
            <NumberContainer>{ingredient.measure}</NumberContainer>
            <Remove>
              <RemoveSvg
                onClick={() => {
                  console.log(ingredient._id);
                  deleteIngradient(ingredient._id);
                }}
              >
                <UseSvg id="remove" />
              </RemoveSvg>
            </Remove>
          </ItemContainer>
        </Item>
      ))}
    </List>
  );
};
export default IngredientsShoppingList;
