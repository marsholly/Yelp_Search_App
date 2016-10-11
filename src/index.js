import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import App from './components/App';
import FavoriteYelp from './components/FavoriteYelp';

render(
  <Router history={browserHistory}>
    <Route path='/' component={Navbar}>
      <IndexRoute component={Welcome}></IndexRoute>
      <Route path='search' component={App} />
      <Route path='favorite' component={FavoriteYelp} />
    </Route>
  </Router>,
  document.getElementById('root')
)
