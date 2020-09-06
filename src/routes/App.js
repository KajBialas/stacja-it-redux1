import React from 'react';
import { connect } from 'react-redux';
import { ACTION_TYPES } from '../index';
import TodoList from '../components/TodoList';

function App({count, incrementCounter, decrementCounter, resetCounter, changeCounter}) {
  return (
    <div>
      Counter: {count}
      <button onClick={incrementCounter} >+</button>
      <button onClick={decrementCounter} >-</button>
      <button onClick={resetCounter} >RESET</button>
      <input value={count} onChange={changeCounter} />
      <TodoList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch({type: ACTION_TYPES.COUNTER_INCREMENT}),
    decrementCounter: () => dispatch({type: ACTION_TYPES.COUNTER_DECREMENT}),
    resetCounter: () => dispatch({type: ACTION_TYPES.COUNTER_RESET}),
    changeCounter: (e) => dispatch({type: ACTION_TYPES.COUNTER_CHANGE, payload: e.target.value})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
