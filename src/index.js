import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {ParallaxProvider} from 'react-scroll-parallax';
import  apiMiddleware  from './redux/middlewares/api';

import './index.css';
import reducer from './redux/reducers/reducer'
import App from './App';

import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || window.compose;

const store = createStore(
  reducer,
  JSON.parse(localStorage.getItem('state')) || undefined,
  composeEnhancers(applyMiddleware(apiMiddleware)));

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('state', JSON.stringify({
    authentication: state.authentication
  }));
});

ReactDOM.render(
  <Provider store={store}>
  <ParallaxProvider>
    <App />
  </ParallaxProvider>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
