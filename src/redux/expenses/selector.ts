import { type RootState } from '../store.ts';

export const selectExpenseList = (state: RootState) =>
  state.expenses.list;
