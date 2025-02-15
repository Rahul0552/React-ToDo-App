import React from 'react';
import TodoApp from './pages/TodoApp';
import './index.css';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="todo-header">T O D O</h1>
      <TodoApp />
    </div>
  );
};

export default App;

