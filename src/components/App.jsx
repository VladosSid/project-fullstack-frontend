import { Route, Routes } from 'react-router-dom';

import { AppBox } from './App.styled';

// import AddRecipiePage from './AddRecipiePage/AddRecipePage';

import MainPage from '../pages/MainPage/MainPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import RestrictedRoute from './Routes/RestrictedRoute';
import PrivateRoute from './Routes/PrivateRoute';

import TemporaryMain from 'pages/TitlePageTemporary/TitlePageTemporary';
import ShoppingListPage from 'pages/ShoppingListPage/ShoppingListPage';
import NotFound from 'pages/NotFoundPage/NotFoundPage';
import AddRecipiePage from 'pages/AddRecipePage/AddRecipePage';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from '../pages/Example/HomePage';
import CategoriesPage from '../pages/CategoriesPage';
// import SearchPage from '../pages/SearchPage/SearchPage';
// import MainPage from 'pages/MainPage/MainPage';

export const App = () => {
  return (
    <AppBox>
      <Routes>
        <Route
          index
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

        <Route
          path="/"
          element={<PrivateRoute component={<SharedLayout />} redirectTo="/" />}
        >
          <Route path="/example" element={<HomePage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/add" element={<AddRecipiePage />} />  
          <Route path="/search" element={<SearchPage />} />
          <Route path="/shopping-list" element={<ShoppingListPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppBox>
  );
};
