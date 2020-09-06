import React from 'react';
import { connect } from 'react-redux';

function App({count, incrementCounter}) {
  return (
    <div>
      Counter: {count}
      <button onClick={incrementCounter} >+</button>
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
