import React from 'react';
import { connect } from 'react-redux';

function App({count, incrementCounter, decrementCounter, resetCounter, changeCounter}) {
  return (
    <div>
      Counter: {count}
      <button onClick={incrementCounter} >+</button>
      <button onClick={decrementCounter} >-</button>
      <button onClick={resetCounter} >RESET</button>
      <input value={count} onChange={changeCounter} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch({type: 'INCREMENT'}),
    decrementCounter: () => dispatch({type: 'DECREMENT'}),
    resetCounter: () => dispatch({type: 'RESET'}),
    changeCounter: (e) => dispatch({type: 'CHANGE', payload: e.target.value})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
