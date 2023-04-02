import {
  List,
  Item,
  ImageContayner,
  ItemContayner,
  TitleProduct,
  NumberContayner,
  Remove,
  RemoveImg,
} from './IngredientsShoppingList.styled';
import remove from '../../images/ShopingList/remove.svg';

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
              <RemoveImg src={remove} alt="remove" />
            </Remove>
          </ItemContayner>
        </Item>
      ))}
    </List>
  );
};
export default IngredientsShoppingList;
