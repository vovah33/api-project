import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // імпорт твоєї основної компоненти
import './index.css'; // підключення стилів (якщо є)

const root = ReactDOM.createRoot(document.getElementById('app')); // перевіряй, чи є елемент з id='app' у index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
