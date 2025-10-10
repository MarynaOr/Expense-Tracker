import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { RootState } from './store';

export const useAppSelextor: TypedUseSelectorHook<RootState> =
  useSelector;
