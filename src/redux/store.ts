import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from './expenses/expenseSlice';

const store = configureStore({
  reducer: {
    expenses: expensesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
// const persistConfig = {
//   key: 'expenses',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)
