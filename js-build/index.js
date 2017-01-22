// use strict mode
"use strict";

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import { NavListContainer } from './components/NavListContainer';
import { App } from './components/App';
import { Page404 } from './components/Page404';

// Make sure React is attached to the window object to avoid bugs
window.React = React;

// Build the <nav> and place it on the page
render(
  <NavListContainer />,
  document.getElementById('nav__react-target')
)


render(
  <App />,
  document.getElementById('container__react-target')
)
/* Build all the resources and place them on the page via a bound
 * router
 */
// render(
//   <Router history={hashHistory}>
//     <Route path="/" component={App} />
//     <Route path="*" component={Page404} />
//   </Router>,
//   document.getElementById('container__react-target')
// )