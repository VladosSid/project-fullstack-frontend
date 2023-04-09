import { Suspense, lazy, useEffect } from 'react'; //eslint-disable-line
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppBox } from './App.styled';
import Modal from './Modal/Modal';
import { ThemeProvider } from 'styled-components';

import { authSelectors, authOperations } from '../redux/users';

import RestrictedRoute from './Routes/RestrictedRoute';
import PrivateRoute from './Routes/PrivateRoute';

import getTheme from '../redux/theming/theme-selector';
import theme from '../style/generalStyle';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const SigninPage = lazy(() => import('../pages/SigninPage/SigninPage'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const CategoriesPage = lazy(() => import('../pages/CategoriesPage'));
const AddRecipiePage = lazy(() =>
  import('../pages/AddRecipePage/AddRecipePage')
);
const RecipiePage = lazy(() => import('../pages/RecipePage/RecipePage'));
const MyRecipesPage = lazy(() => import('../pages/MyRecipePage/MyRecipesPage'));
// const RecipePage = lazy(() => import('../pages/RecipePage/RecipePage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));
const ShoppingListPage = lazy(() =>
  import('../pages/ShoppingListPage/ShoppingListPage')
);
const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const themeUser = useSelector(getTheme);

  const dispatch = useDispatch();
  const isGetingCurent = useSelector(authSelectors.getGetingCurentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme[themeUser]}>
      {isGetingCurent ? (
        <b>Refreshing user...</b>
      ) : (
        <Suspense fallback={<b>Loading...</b>}>
          <AppBox>
            <Modal />
            <Routes>
              <Route
                index
                element={
                  <RestrictedRoute
                    component={<WelcomePage />}
                    redirectTo="/home"
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={<RegisterPage />}
                    redirectTo="/home"
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={<SigninPage />}
                    redirectTo="/home"
                  />
                }
              />

              <Route path="/" element={<SharedLayout />}>
                <Route
                  path="/home"
                  element={<PrivateRoute component={<MainPage />} />}
                />

<<<<<<< HEAD
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/add" element={<AddRecipiePage />} />
            <Route path="/my" element={<MyRecipesPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
=======
                <Route
                  path="/categories/:categName"
                  element={<PrivateRoute component={<CategoriesPage />} />}
                />
>>>>>>> 26cf09698af16b076b3ad99ea02516ab24d55205

                <Route
                  path="/add"
                  element={<PrivateRoute component={<AddRecipiePage />} />}
                />

                <Route
                  path="/favorite"
                  element={<PrivateRoute component={<FavoritePage />} />}
                />

                <Route
                  path="/recipe/:recipeId"
                  element={<PrivateRoute component={<RecipiePage />} />}
                />
                <Route
                  path="/my"
                  element={<PrivateRoute component={<MyRecipesPage />} />}
                />

                <Route
                  path="/search"
                  element={<PrivateRoute component={<SearchPage />} />}
                />

                <Route
                  path="/hopping-list"
                  element={<PrivateRoute component={<ShoppingListPage />} />}
                />

                <Route
                  path="*"
                  element={<PrivateRoute component={<NotFoundPage />} />}
                />
              </Route>
            </Routes>
          </AppBox>
        </Suspense>
      )}
    </ThemeProvider>
  );
};
