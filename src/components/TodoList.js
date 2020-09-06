import React from 'react';
import { connect } from 'react-redux';
import { TODO_ACTION_TYPES } from '../modules/todo/todo.action';

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
    todoList: state.todo.list,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    todoMarkComplete: (value) => dispatch({type: TODO_ACTION_TYPES.MARK_COMPLETE, payload: value})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);