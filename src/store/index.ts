import { configureStore } from '@reduxjs/toolkit';
import stockReducer from './Stock.store';

const store = configureStore({
  reducer: {
    stock: stockReducer,
    userStock: stockReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
