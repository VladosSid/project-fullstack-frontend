import React
// ,{ useEffect }
  from 'react';
  import { useSelector } from 'react-redux';
import ShoppingList from '../../components/ShoppingListPage/ShoppingList';
// import { ContanerShopingList } from './ShoppingListPage.styled';
import { MainPageTitle } from '../../components/MainPageTitle/MainPageTitle';
import ingredients from '../../ingredients.json';
import { MainContainer } from '../../components/MainContainer/MainContainer';


const ShoppingListPage = () => {

const ingredientsS = useSelector(state => state.auth.user.shoppingList);
  console.log(ingredientsS);
//   useEffect(() => {
// console.log(ingredientsS);
//   }, [ingredientsS]);
  
  // тут буде запит за коллекцією інградієнтів
  const titleShopingList = 'Shopping list';
  return (
    <MainContainer>
      {/* <ContanerShopingList> */}
        <MainPageTitle title={titleShopingList} />
        <ShoppingList ingredients={ingredients} />
      {/* </ContanerShopingList> */}
    </MainContainer>
  );
};

export default ShoppingListPage;
