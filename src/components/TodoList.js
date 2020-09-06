import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { TODO_ACTION_TYPES } from '../modules/todo/todo.action';
import { selectNotCompletedTodo, selectCompletedTodo, selectLoadingStatus, selectErrorStatus } from '../modules/todo/todo.selector';
import { ACTION_FETCH_TODOS } from '../modules/todo/todo.action';

function TodoList({todoListCompleted, todoListNotCompleted, todoMarkComplete, fetchTodo, todoLoading, todoError}) {
  useEffect(() => {
    !todoListCompleted.length && !todoListNotCompleted.length && fetchTodo();
  }, [fetchTodo]);

  const renderTodos = (list) =>
    list.map((elementTodo) =>
      <div key={elementTodo.id} onClick={() => todoMarkComplete(elementTodo.id)}>
        {elementTodo.title}
        {elementTodo.completed ? '- zadanie wykonane' : '- zadanie niewykonane'}
      </div>);

  return (
    <div>
      <h2>Lista todo</h2>
      {todoLoading ? <div>ładowanie...</div> :
        todoError ? <div>Błąd ładowania danych</div> :
        <>
          <h3>Lista zadań niewykonanych</h3>
          {todoListNotCompleted.length ? renderTodos(todoListNotCompleted) : <div>Brak elementów TODO</div> }
          <h3>Lista zadań wykonanych</h3>
          {todoListCompleted.length ? renderTodos(todoListCompleted) : <div>Brak elementów TODO</div> }
        </>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todoListNotCompleted: selectNotCompletedTodo(state),
    todoListCompleted: selectCompletedTodo(state),
    todoLoading: selectLoadingStatus(state),
    todoError: selectErrorStatus(state),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    todoMarkComplete: (value) => dispatch({type: TODO_ACTION_TYPES.MARK_COMPLETE, payload: value}),
    fetchTodo: () => dispatch(ACTION_FETCH_TODOS()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);