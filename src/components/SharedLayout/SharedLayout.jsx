import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Body, BoxBackgroun } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Body>
      <BoxBackgroun>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <Footer />
      </BoxBackgroun>
    </Body>
  );
};

export default SharedLayout;
