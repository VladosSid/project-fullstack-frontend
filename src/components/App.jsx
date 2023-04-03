import { Route, Routes } from 'react-router-dom';
import { AppBox } from './App.styled';

import RestrictedRoute from './Routes/RestrictedRoute';
import PrivateRoute from './Routes/PrivateRoute';

import WelcomePage from 'pages/WelcomePage/WelcomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import SigninPage from 'pages/SigninPage/SigninPage';
import SharedLayout from './SharedLayout/SharedLayout';
import MainPage from '../pages/MainPage/MainPage';
import CategoriesPage from '../pages/CategoriesPage';
import AddRecipiePage from 'pages/AddRecipePage/AddRecipePage';
import RecipePage from 'pages/RecipePage/RecipePage';
import FavoritePage from 'pages/FavoritePage/FavoritePage';
import ShoppingListPage from 'pages/ShoppingListPage/ShoppingListPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import NotFound from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <AppBox>
      <Routes>
        <Route
          index
          element={<RestrictedRoute component={<WelcomePage />} redirectTo="/main" />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegisterPage />} redirectTo="/main" />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<SigninPage />} redirectTo="/main" />}
        />

        <Route
          path="/"
          element={<PrivateRoute component={<SharedLayout />} redirectTo="/" />}
        >
          <Route path="/home" element={<MainPage />} />

          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/add" element={<AddRecipiePage />} />  
          <Route path="/my" element={<RecipePage />} />
          <Route path="/favorite" element={<FavoritePage />} />

          <Route path="/shopping-list" element={<ShoppingListPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppBox>
  );
};
