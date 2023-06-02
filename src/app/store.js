import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from 'features/api/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
  devTools: import.meta.env.MODE === 'development',
  // devTools: import.meta.env.DEV === false,
  // devTools: import.meta.env.PROD === true,
});
