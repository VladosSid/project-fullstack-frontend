import IngredientsShoppingList from './IngredientsShoppingList';
import {
  TitltList,
  TitleListProducts,
  TitleListNumber,
  Tabl,
} from './ShoppingList.styled';

const ShoppingList = ({ingredients}) => {
  return (
     <Tabl>
      <TitltList>
        <TitleListProducts>Products</TitleListProducts>
        <TitleListNumber>Number</TitleListNumber>
        <span>Remove</span>
      </TitltList>
      <IngredientsShoppingList ingredients={ingredients} />
    </Tabl>
  );
};
export default ShoppingList;
