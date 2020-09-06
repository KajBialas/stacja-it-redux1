import React from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
function Todo() {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default Todo;