import IngredientsShoppingList from '../components/ShoppingListPage';
import {
  TitltList,
  TitleListProducts,
  TitleListNumber,
  ContanerShopingList,
  // TitleShopingList,
  Tabl,
} from './ShoppingListPage.styled';
import {MainPageTitle} from '../components/MainPageTitle/MainPageTitle'
import ingredients from '../ingredients.json';

const ShoppingListPage = () => {
 // тут буде запит за коллекцією інградієнтів
  const titleShopingList = "Shopping list";
  return (
    <ContanerShopingList>
      <MainPageTitle title={titleShopingList}/>
        {/* <TitleShopingList>Shopping list</TitleShopingList> */}
        <Tabl>
          <TitltList>
            <TitleListProducts>Products</TitleListProducts>
            <TitleListNumber>Number</TitleListNumber>
            <span>Remove</span>
          </TitltList>
          <IngredientsShoppingList ingredients={ingredients} />
        </Tabl>
    
       </ContanerShopingList>
  );
};

export default ShoppingListPage;
