import "babel-polyfill";
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico');
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.scss';
import { syncHistoryWithStore } from 'react-router-redux';
import {loadCharacters} from './actions/starWarsActions';

const store = configureStore();

store.dispatch(loadCharacters());

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);