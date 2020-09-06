import React from 'react';
import { connect } from 'react-redux';

function TodoList({todoList}) {
  const renderTodos = () =>
    todoList.map((elementTodo, index) =>
      <div key={`${elementTodo}-${index}`}>{elementTodo}</div>);

  return (
    <div>
      <h2>Lista todo</h2>
      {todoList.length ? renderTodos() : <div>Brak elementów TODO</div> }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todoList: state.todo,
  }
};

export default connect(mapStateToProps)(TodoList);