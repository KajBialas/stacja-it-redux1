export const selectCompletedTodo = (todo) =>
  todo.filter(item => item.completed);

export const selecNotCompletedTodo = (todo) =>
  todo.filter(item => !item.completed);