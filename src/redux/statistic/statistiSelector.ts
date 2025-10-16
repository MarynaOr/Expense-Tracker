import { createSelector } from 'reselect';
import type { Expense } from '../expenses/expenseSlice';
import type { RootState } from '../store';
import { getStartedDate } from './helperStatistic';

export const selectAllExpenses = (state: RootState): Expense[] =>
  state.expenses.list;

export const selectStatisticPeriod = (state: RootState) =>
  state.statistic.timePeriod;

export const selectFilteredExp = createSelector(
  [selectAllExpenses, selectStatisticPeriod],
  (expenses, period) => {
    const startDate = getStartedDate(period);

    return expenses.filter((exp) => new Date(exp.date) >= startDate);
  },
);

export const selectTotalExp = createSelector(
  selectFilteredExp,
  (filteredExp) => {
    const total = filteredExp.reduce(
      (sum, expenses) => sum + expenses.amount,
      0,
    );

    return parseFloat(total.toFixed(2));
  },
);

export const selectExpensesByCategory = createSelector(
  selectFilteredExp,
  (filteredExp) => {
    const categoryTotal: Record<string, number> = {};

    filteredExp.forEach((expense) => {
      const { description, amount } = expense;
      const categoryName = description || 'Без категорії';
      categoryTotal[categoryName] =
        (categoryTotal[categoryName] || 0) + amount;
    });

    return Object.entries(categoryTotal).map(([name, value]) => ({
      name,
      value: parseFloat(value.toFixed(2)),
    }));
  },
);
