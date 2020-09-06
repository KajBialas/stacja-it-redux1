import React from 'react';
import { COUNTER_ACTION_TYPES} from '../modules/counter/counter.action';
import TodoList from '../components/TodoList';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      Counter: {count}
      <button onClick={() => dispatch({type: COUNTER_ACTION_TYPES.INCREMENT})} >+</button>
      <button onClick={() => dispatch({type: COUNTER_ACTION_TYPES.DECREMENT})} >-</button>
      <button onClick={() => dispatch({type: COUNTER_ACTION_TYPES.RESET})} >RESET</button>
      <input value={count} onChange={(e) => dispatch({type: COUNTER_ACTION_TYPES.CHANGE, payload: e.target.value})} />
      <TodoList />
    </div>
  );
}

export default App;
