import { combineReducers } from '@reduxjs/toolkit';
import expensesReducer from './expenses/expenseSlice';
import statisticReducer from './statistic/statisticSlice';

const rootReducer = combineReducers({
  expenses: expensesReducer,
  statistic: statisticReducer,
});

export default rootReducer;
