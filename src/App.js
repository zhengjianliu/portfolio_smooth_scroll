// src/App.js
import React from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import VerticalScroll from './components/VerticalScroll';

function App() {
  const isDark = useSelector((state) => state.theme.isDarkMode);
  return (
    <div className={`App ${isDark?'dark__theme':''}`}>
      <VerticalScroll />
    </div>
  );
}

export default App;
