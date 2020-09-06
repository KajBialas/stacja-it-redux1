import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Subpage from './routes/Subpage';
import Nav from './components/Nav';
import Todo from './routes/Todo';

const INITIAL_STATE = {
  counter: 0,
  todo: [],
};

export const ACTION_TYPES = {
  COUNTER_INCREMENT: 'COUNTER_INCREMENT',
  COUNTER_DECREMENT: 'COUNTER_DECREMENT',
  COUNTER_RESET: 'COUNTER_RESET',
  COUNTER_CHANGE: 'COUNTER_CHANGE',
  TODO_ADD: 'TODO_ADD',
  TODO_MARK_COMPLETE: 'TODO_MARK_COMPLETE',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.COUNTER_INCREMENT:
      return state = {
        ...state,
        counter: state.counter + 1,
      };
    case ACTION_TYPES.COUNTER_DECREMENT:
      return state = {
        ...state,
        counter: state.counter - 1,
      };
    case ACTION_TYPES.COUNTER_RESET:
      return {
        ...state,
        counter: 0,
      };
    case ACTION_TYPES.COUNTER_CHANGE:
      return state = {
        ...state,
        counter: Number(action.payload),
      };
    case ACTION_TYPES.TODO_ADD:
      const newTodoElementId = state.todo.length ? state.todo.length + 1 : 1;
      const newTodoElement = {
        id: newTodoElementId,
        text: action.payload,
        completed: false,
      };

      return state = {
        ...state,
        todo: [...state.todo, newTodoElement],
      };
    case ACTION_TYPES.TODO_MARK_COMPLETE:
      const newTodoArray = [...state.todo];
      newTodoArray[action.payload].completed = !newTodoArray[action.payload].completed;
      return state = {
        ...state,
        todo: newTodoArray,
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/subpage" component={Subpage} />
        <Route exact path="/todo" component={Todo} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
