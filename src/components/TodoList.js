import React from 'react';
import { connect } from 'react-redux';
import { TODO_ACTION_TYPES } from '../modules/todo/todo.action';
import { selectNotCompletedTodo, selectCompletedTodo } from '../modules/todo/todo.selector';

function TodoList({todoListCompleted, todoListNotCompleted, todoMarkComplete}) {
  const renderTodos = (list) =>
    list.map((elementTodo) =>
      <div key={elementTodo.id} onClick={() => todoMarkComplete(elementTodo.id)}>
        {elementTodo.text}
        {elementTodo.completed ? '- zadanie wykonane' : '- zadanie niewykonane'}
      </div>);

  return (
    <div>
      <h2>Lista todo</h2>
      <h3>Lista zadań niewykonanych</h3>
      {todoListNotCompleted.length ? renderTodos(todoListNotCompleted) : <div>Brak elementów TODO</div> }
      <h3>Lista zadań wykonanych</h3>
      {todoListCompleted.length ? renderTodos(todoListCompleted) : <div>Brak elementów TODO</div> }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todoListNotCompleted: selectNotCompletedTodo(state),
    todoListCompleted: selectCompletedTodo(state),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    todoMarkComplete: (value) => dispatch({type: TODO_ACTION_TYPES.MARK_COMPLETE, payload: value})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);