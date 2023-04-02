import {
  List,
  Item,
  ImageContayner,
  ItemContayner,
  TitleProduct,
  NumberContayner,
  Remove,
  RemoveSvg,
} from './IngredientsShoppingList.styled';
import UseSvg from '../../helpers/useSvg/useSvg';

const IngredientsShoppingList = ingredients => {
  const ingredientsArr = ingredients.ingredients;
  return (
    <List>
      {ingredientsArr.map(ingredient => (
        <Item key={ingredient._id.$oid}>
          <ItemContayner>
            <ImageContayner>
              <img src={ingredient.thb} alt="ingredient" />
            </ImageContayner>
            <TitleProduct>{ingredient.ttl}</TitleProduct>
            <NumberContayner>5</NumberContayner>
            <Remove>
              <RemoveSvg>
              <UseSvg id="remove"/>
              </RemoveSvg>
            </Remove>
          </ItemContayner>
        </Item>
      ))}
    </List>
  );
};
export default IngredientsShoppingList;
