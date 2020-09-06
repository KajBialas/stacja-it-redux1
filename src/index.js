import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Subpage from './Subpage';
import Nav from './Nav';

const INITIAL_STATE = {
  counter: 0,
  todo: [],
};

export const ACTION_TYPES = {
  COUNTER_INCREMENT: 'COUNTER_INCREMENT',
  COUNTER_DECREMENT: 'COUNTER_DECREMENT',
  COUNTER_RESET: 'COUNTER_RESET',
  COUNTER_CHANGE: 'COUNTER_CHANGE',
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
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
