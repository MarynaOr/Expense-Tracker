import { type RootState } from '../store.ts';

export const selectExpenseList = (state: RootState) =>
  state.expenses.list;

export const selectDeleteExp = (state: RootState) =>
  state.expenses.list;
