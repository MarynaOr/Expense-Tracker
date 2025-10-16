import { configureStore } from '@reduxjs/toolkit';
// import expensesReducer from './expenses/expenseSlice';
// import statisticReducer from './statistic/statisticSlice';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['expenses'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: persistedReducer,
  // reducer: {
  //   persistedReducer,
  //   expenses: expensesReducer,
  //   statistic: statisticReducer,
  // },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/REGISTER',
        ],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export default store;
