import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import loginReducer from './loginReducer';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: {loginReducer: loginReducer.reducer},
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});
