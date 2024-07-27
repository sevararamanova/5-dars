import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.todos;

export const selectFilteredTodos = createSelector(
  [selectTodos, (state, filter) => filter],
  (todos, filter) => {
    if (filter === 'completed') return todos.filter(todo => todo.completed);
    if (filter === 'incomplete') return todos.filter(todo => !todo.completed);
    return todos;
  }
);
