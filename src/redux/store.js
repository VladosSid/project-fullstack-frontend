import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './users/auth-slice';
import recipeReducer from './recipe/recipe-salice';

const persistConfigUser = {
  key: 'token',

  storage,
  whitelist: ['token', 'theme'],
};

const persistConfigIngredients = {
  key: 'ingredients',
  storage,
  whitelist: ['allIngredients'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfigUser, authReducer),
    recipe: persistReducer(persistConfigIngredients, recipeReducer),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
