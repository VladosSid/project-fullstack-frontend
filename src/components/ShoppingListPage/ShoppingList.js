import { useEffect, useState } from 'react';
import IngredientsShoppingList from './IngredientsShoppingList';
import {
  TitltList,
  TitleListProducts,
  TitleListNumber,
  ImgIngradientsContainer,
  ImgIngradients,
  ImgIngradientsText,
} from './ShoppingList.styled';
// import ingredients from '../../ingredients.json';
import queryBackEnd from '../../helpers/request/queryBackEnd';
import imgIngradients from '../../images/ShopingList/ingradients.png';


const ShoppingList = () => {
  const [ingredientS, setIngredientS] = useState([]);
  useEffect(() => {
    queryBackEnd.queryShoppingList().then(response => {
      setIngredientS(response.data);
    });
  }, []);

  const deleteIngradient = contactId => {
    queryBackEnd
      .queryRemoveShoppingList({ shoppingListIng: contactId })
      .then(response => 
        setIngredientS(prevState =>
          prevState.filter(ingradient =>ingradient._id !== contactId))
      )
      .catch(e => console.log('e', e));
  };

  return (
    <div>
      {ingredientS.length > 0 ? (
        <>
          <TitltList>
            <TitleListProducts>Products</TitleListProducts>
            <TitleListNumber>Number</TitleListNumber>
            <span>Remove</span>
          </TitltList>
          <IngredientsShoppingList
            ingredients={ingredientS}
            deleteIngradient={deleteIngradient}
          />
        </>
      ) : (
        <ImgIngradientsContainer>
          <ImgIngradients src={imgIngradients} alt="ingredient" />
          <ImgIngradientsText>Your shopping list is empty.</ImgIngradientsText>
        </ImgIngradientsContainer>
      )}
    </div>
  );
};
export default ShoppingList;
