// import { useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import IngredientsShoppingList from './IngredientsShoppingList';
import {
  TitltList,
  TitleListProducts,
  TitleListNumber,
  Tabl,
} from './ShoppingList.styled';
// import ingredients from '../../ingredients.json';
import queryBackEnd from "../../helpers/request/queryBackEnd"
// import Notiflix from 'notiflix';


const ShoppingList = () => {
  const [ingredientS, setIngredientS] = useState([]);

  useEffect(() => {
  
       queryBackEnd
        .queryShoppingList()
        .then(response => {
          setIngredientS(response.result[0].shoppingList);
          console.log("111",response.result[0].shoppingList);
         })


  }, []);


  return (
    <Tabl>
      {ingredientS.length > 0 && (
        <>
          <TitltList>
            <TitleListProducts>Products</TitleListProducts>
            <TitleListNumber>Number</TitleListNumber>
            <span>Remove</span>
          </TitltList>
          <IngredientsShoppingList
            ingredients={ingredientS}
            setIngredientS={setIngredientS}
          />
        </>
      )}
    </Tabl>
  );
};
export default ShoppingList;
