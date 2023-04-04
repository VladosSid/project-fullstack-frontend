import React
// ,{ useEffect }
  from 'react';
import ShoppingList from '../../components/ShoppingListPage/ShoppingList';
// import { ContanerShopingList } from './ShoppingListPage.styled';
import { MainPageTitle } from '../../components/MainPageTitle/MainPageTitle';
import { MainContainer } from '../../components/MainContainer/MainContainer';


const ShoppingListPage = () => {

  const titleShopingList = 'Shopping list';
  return (
    <MainContainer>
      {/* <ContanerShopingList> */}
        <MainPageTitle title={titleShopingList} />
        <ShoppingList/>
      {/* </ContanerShopingList> */}
    </MainContainer>
  );
};

export default ShoppingListPage;
