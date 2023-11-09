// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/themeReducer';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    // Add other slice reducers here
  },
  // middleware and devtools are automatically configured by default
});
