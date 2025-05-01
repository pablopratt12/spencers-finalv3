import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './components/TodoList';
import './style.css';

ReactDOM.createRoot(document.getElementById('react-root')).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);
