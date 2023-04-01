import Header from './Header';
import Footer from './Footer';
import { AppBox } from './App.styled';
import AddRecipiePage from './AddRecipiePage/AddRecipePage';

 
export const App = props => {
  return (
    <AppBox>
      <Header />
        <AddRecipiePage />
        <Footer />
    </AppBox>
  );
};

