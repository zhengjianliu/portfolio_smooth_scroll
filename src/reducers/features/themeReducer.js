// features/counter/themeReducer.js
import { createSlice } from '@reduxjs/toolkit';

export const themeReducer = createSlice({
  name: 'themeReducer',
  initialState: {
    isDark:false,
  },
  reducers: {
    changeMode: state => {
      state.isDark = !state.isDark;
    }
    // You can add more reducer functions here as needed
  },
});

export const { changeMode } = themeReducer.actions;

export default themeReducer.reducer;
