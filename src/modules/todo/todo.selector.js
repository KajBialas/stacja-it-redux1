import { createSelector } from 'reselect';

export const selectCompletedTodo = createSelector(
  (state) => state.todo.list,
  (todoList) => todoList.filter(item => item.completed)
);

export const selectNotCompletedTodo = createSelector(
  (state) => state.todo.list,
  (todoList) => todoList.filter(item => !item.completed)
);