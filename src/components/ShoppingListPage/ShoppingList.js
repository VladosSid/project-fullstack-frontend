import { useSelector } from 'react-redux';
import IngredientsShoppingList from './IngredientsShoppingList';
import {
  TitltList,
  TitleListProducts,
  TitleListNumber,
  Tabl,
} from './ShoppingList.styled';
import ingredients from '../../ingredients.json';
import authSelectors from '../../redux/users/auth-selectors'
import recipeSelectors from '../../redux/recipe/recipe-selectors';
//useState



//   useEffect(() => {
// console.log(ingredientsS);
//   }, [ingredientsS]);

const ShoppingList = () => {
const ingredientsShopping = useSelector(authSelectors.getShoppingList);
  console.log(ingredientsShopping);

  const ollIngradients = useSelector(recipeSelectors.getAllIngredients);
  console.log(ollIngradients);
 
  


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
