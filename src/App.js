import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm />
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
      <TodoList filter={filter} />
    </div>
  );
};

export default App;
