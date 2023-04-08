import React  from 'react';
import ShoppingList from '../../components/ShoppingListPage/ShoppingList';
import { MainPageTitle } from '../../components/MainPageTitle/MainPageTitle';
import { MainContainer } from '../../components/MainContainer/MainContainer';


const ShoppingListPage = () => {

  const titleShopingList = 'Shopping list';
  return (
    <MainContainer>
          <MainPageTitle title={titleShopingList} />
        <ShoppingList/>
     </MainContainer>
  );
};

export default ShoppingListPage;
