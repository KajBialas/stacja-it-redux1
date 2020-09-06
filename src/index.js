import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Subpage from './routes/Subpage';
import Nav from './components/Nav';
import Todo from './routes/Todo';
import configureStore from './store';

const store = configureStore();

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
