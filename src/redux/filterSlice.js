import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filters,
  reducers: {
    setFilter: (_, action) => {
      return action.payload;
    },
  },
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
