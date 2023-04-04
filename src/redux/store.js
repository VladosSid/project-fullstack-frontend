import {
  configureStore,
  // getDefaultMiddleware
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './users/auth-slice';
import recipeReducer from './recipe/recipe-salice';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

const persistConfigUser = {
  key: 'token',
  storage,
  whitelist: ['token'],
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

  // middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
