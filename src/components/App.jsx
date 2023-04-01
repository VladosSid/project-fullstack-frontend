import Header from './Header';
import Footer from './Footer';

import { AppBox } from './App.styled';
import ShoppingListPage from '../pages/ShoppingListPage'
 
export const App = props => {
  return (
    <AppBox>
      <Header />
<ShoppingListPage/>
      <Footer />
    </AppBox>
  );
};

