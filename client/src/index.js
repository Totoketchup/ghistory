import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import Login from './app/containers/login';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './shared/reducer';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { BrowserRouter, Route, Switch } from "react-router-dom";

const loggerMiddleware = createLogger()

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)
const AppContainer = (
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={ true } component={ App } />
        <Route path='/login' exact={ false } component={ Login } />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(AppContainer, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
