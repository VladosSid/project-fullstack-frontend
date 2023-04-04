import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppBox } from './App.styled';

import RestrictedRoute from './Routes/RestrictedRoute';
import PrivateRoute from './Routes/PrivateRoute';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const SigninPage = lazy(() => import('../pages/SigninPage/SigninPage'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const CategoriesPage = lazy(() => import('../pages/CategoriesPage'));
const AddRecipiePage = lazy(() => import('../pages/AddRecipePage/AddRecipePage'));
const MyRecipesPage = lazy(() => import('../pages/MyRecipePage/MyRecipesPage'));
// const RecipePage = lazy(() => import('../pages/RecipePage/RecipePage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));
const ShoppingListPage = lazy(() => import('../pages/ShoppingListPage/ShoppingListPage'));
const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppBox>
        <Routes>
          <Route
            index
            element={<RestrictedRoute component={<WelcomePage/> } redirectTo="/main" />}
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
            <Route path="/my" element={<MyRecipesPage />} />
            <Route path="/favorite" element={<FavoritePage />} />


            <Route path="/shopping-list" element={<ShoppingListPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AppBox>
    </Suspense>
  );
};
