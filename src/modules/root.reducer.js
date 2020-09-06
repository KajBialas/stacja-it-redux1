import { combineReducers } from 'redux';
import todoReducer from './todo/todo.redux';
import counterReducer from './counter/counter.redux';

export default combineReducers({
  todo: todoReducer,
  counter: counterReducer,
})