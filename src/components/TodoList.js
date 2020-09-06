import React from 'react';
import { connect } from 'react-redux';
import { ACTION_TYPES } from '../index';

function TodoList({todoList, todoMarkComplete}) {
  const renderTodos = () =>
    todoList.map((elementTodo, index) =>
      <div key={elementTodo.id} onClick={() => todoMarkComplete(index)}>
        {elementTodo.text}
        {elementTodo.completed ? '- zadanie wykonane' : '- zadanie niewykonane'}
      </div>);

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

const mapDispatchToProps = dispatch => {
  return {
    todoMarkComplete: (value) => dispatch({type: ACTION_TYPES.TODO_MARK_COMPLETE, payload: value})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);