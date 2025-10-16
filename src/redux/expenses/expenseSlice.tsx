import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
export interface Expense {
  id: string;
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
    deleteExpense: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(
        (exp) => exp.id !== action.payload,
      );
    },
  },
});

export const { addExpense, deleteExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
