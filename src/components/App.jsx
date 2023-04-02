
import { Route, Routes } from 'react-router-dom';

import { AppBox } from './App.styled';
// import MainPage from 'pages/MainPage/MainPage';

import RestrictedRoute from './Routes/RestrictedRoute';
import PrivateRoute from './Routes/PrivateRoute';

import TemporaryMain from 'pages/MainPageTemporary';
import ShoppingListPage from 'pages/ShoppingListPage';
import NotFound from 'pages/NotFoundPage';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage';

 
export const App = () => {
  return (
    <AppBox>

      <Routes>
        <Route index
          element={
            <RestrictedRoute component={<TemporaryMain />} redirectTo="/main" />
          }
        />

        {/* !!!! AUTHORIZATION AS AN EXAMPLE !!!! */}
        {/* <Route
          index
          element={
            <RestrictedRoute component={<AuthPage />} redirectTo="/main" />
          }
        /> */}
        {/* <Route path="/register"
          element={
            <RestrictedRoute component={<RegisterPage />} redirectTo="/main" />
          }
        /> */}
        {/* <Route path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/main" />
          }
        /> */}


        
        <Route path="/"
          element={
            <PrivateRoute component={<SharedLayout />} redirectTo="/" />
        }>
          <Route path="/home" element={<HomePage />} />         
          <Route path="/shopping-list" element={<ShoppingListPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </AppBox>
  );
};

