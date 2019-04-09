import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import audio from './reducers/audio';
import time from './reducers/time';
import transport from './reducers/transport';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ ...audio, ...transport, ...time }),
  {},
  composeEnhancers(applyMiddleware(thunk))
);

export default props => <Provider store={store}>{props.children}</Provider>;
