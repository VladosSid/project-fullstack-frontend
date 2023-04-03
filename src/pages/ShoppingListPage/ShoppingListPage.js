import React
// ,{ useEffect, useDispatch }
  from 'react';
import ShoppingList from '../../components/ShoppingListPage/ShoppingList';

import { ContanerShopingList } from './ShoppingListPage.styled';

import { MainPageTitle } from '../../components/MainPageTitle/MainPageTitle';
import ingredients from '../../ingredients.json';

//   const dispatch = useDispatch();

const ShoppingListPage = () => {

//   useEffect(() => {
//     dispatch(getIngredients([dispatch]));
    
//   });
  
  // тут буде запит за коллекцією інградієнтів
  const titleShopingList = 'Shopping list';
  return (
    <ContanerShopingList>
      <MainPageTitle title={titleShopingList} />
      <ShoppingList ingredients={ingredients} />
    </ContanerShopingList>
  );
};

export default ShoppingListPage;
