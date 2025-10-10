import { combineReducers } from '@reduxjs/toolkit';
import expensesReducer from './expenses/expenseSlice';

const rootReducer = combineReducers({
  expenses: expensesReducer,
});

export default rootReducer;
