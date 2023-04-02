import Header from './Header';
import Footer from './Footer';

import { AppBox, BoxBodyApp } from './App.styled';

export const App = props => {
  return (
    <AppBox>
      <Header />

      <BoxBodyApp>
        {/* Тут всі компоненти сайту о крім Хедера та футера */}
      </BoxBodyApp>

      <Footer />
    </AppBox>
  );
};
