import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { selectFilteredTodos } from '../features/todos/todosSelectors';

const TodoList = ({ filter }) => {
  const todos = useSelector(state => selectFilteredTodos(state, filter));

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
