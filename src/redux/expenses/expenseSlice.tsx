import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
export interface Expense {
  // name: string;
  id: string;
  // type: string;
  description: string;
  amount: number;
  date: string;
  category: string;
}

export interface ExpensesSlice {
  list: Expense[];
}

const initialState = {
  list: [] as Expense[],
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.list.push(action.payload);
    },
  },
});

export const { addExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
