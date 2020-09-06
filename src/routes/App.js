import React from 'react';
import { connect } from 'react-redux';
import { COUNTER_ACTION_TYPES} from '../modules/counter/counter.action';
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
    count: state.counter.value,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch({type: COUNTER_ACTION_TYPES.INCREMENT}),
    decrementCounter: () => dispatch({type: COUNTER_ACTION_TYPES.DECREMENT}),
    resetCounter: () => dispatch({type: COUNTER_ACTION_TYPES.RESET}),
    changeCounter: (e) => dispatch({type: COUNTER_ACTION_TYPES.CHANGE, payload: e.target.value})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
