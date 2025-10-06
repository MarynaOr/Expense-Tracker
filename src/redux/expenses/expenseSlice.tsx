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
  list: [
    {
      id: '1',
      description: 'Кава',
      amount: 50.0,
      date: '2024-01-01',
    },
    {
      id: '2',
      description: 'Оренда',
      amount: 15000.0,
      date: '2024-01-05',
    },
    {
      id: '3',
      description: 'Книги',
      amount: 450.5,
      date: '2024-01-07',
    },
  ] as Expense[],
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
