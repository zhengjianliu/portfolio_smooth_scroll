// features/counter/themeReducer.js
import { createSlice } from '@reduxjs/toolkit';

export const themeReducer = createSlice({
  name: 'themeReducer',
  initialState: {
    isDarkMode:false,
  },
  reducers: {
    changeMode: state => {
      state.isDarkMode = !state.isDarkMode;
    }
    // You can add more reducer functions here as needed
  },
});

export const { changeMode } = themeReducer.actions;

export default themeReducer.reducer;
