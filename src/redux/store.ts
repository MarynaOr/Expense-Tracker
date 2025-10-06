import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from './expenses/expenseSlice';

export default configureStore({
  reducer: {
    expenses: expensesReducer,
  },
});

// const persistConfig = {
//   key: 'expenses',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)
