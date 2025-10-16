import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type StatisticState = {
  timePeriod: 'day' | 'week' | 'month' | 'year';
  selectCategory: string | null;
};

const initialState: StatisticState = {
  timePeriod: 'month',
  selectCategory: null,
};

const statisticSlice = createSlice({
  name: 'statistic',
  initialState,
  reducers: {
    period: (
      state,
      action: PayloadAction<StatisticState['timePeriod']>,
    ) => {
      state.timePeriod = action.payload;
    },
  },
});

export const { period } = statisticSlice.actions;

export default statisticSlice.reducer;
