import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import About from './components/About';
import CharactersListPage from './containers/CharactersListPage';
import CharacterDetailsPage from './containers/CharacterDetailsPage';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CharactersListPage}/>
    <Route path="about" component={About}/>
    <Route path="characters/:characterName" component={CharacterDetailsPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);